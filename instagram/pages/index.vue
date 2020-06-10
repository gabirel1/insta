<template>
  <div>
    <v-app-bar fixed height="65px" style="background-color:white" white>

      <v-spacer>
      <v-toolbar-title style="color :black">Instagram</v-toolbar-title>
      </v-spacer>
      <nuxt-link :to="dest">
      <v-btn icon>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-btn>
      </nuxt-link>
    </v-app-bar>
    <div class="container">
      <v-card class="my_spacer" v-for="index in 3" :key="index" style="container">
        <v-card width="350px">
        <v-img :src="require('../assets/' + imgs[index - 1])" v-on:dblclick="likedItem(index - 1)"></v-img>
        <v-card-title>{{titles[index - 1]}}</v-card-title>
        <v-card-text>{{desc[index - 1]}}</v-card-text>
        <v-card-actions>
        <v-btn @click="likedItem(index - 1)" icon>
        <v-icon v-if="liked[index - 1]" color="pink darken-1">mdi-heart</v-icon>
        <v-icon v-else >mdi-heart</v-icon>
        </v-btn>
        <v-btn @click="downloadthis(index -1)" icon>
          <v-icon v-if="downloaded[index - 1]" color="blue darken-1">mdi-download</v-icon>
          <v-icon v-else>mdi-download</v-icon>
        </v-btn>
        </v-card-actions>
        </v-card>
      </v-card>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    data () {
      return {
    downloaded : this.$store.state.downloaded,
    liked : this.$store.state.liked,
    imgs : ['ariane5.jpg', 'image0.jpg', 'tesla.jpg'],
    titles : ['Ariane5', 'Dev meme', 'Tesla roadster'],
    desc : ['test', 'qué partido !', '안녕 여러분!'],
    dest : '/liked'
    }
  } ,
  methods : {
    likedItem (index) {
      if (this.liked[index] == false) {
        this.$store.commit('addLike', index);
      } else {
        this.$store.commit('deleteLike', index);
      }
      Vue.set(this.liked, index, this.$store.state.liked[index]);
    },
    downloadthis (index) {
      if (this.$store.state.downloaded[index] == false) {
        this.$store.commit('addDownloaded', index);
        console.log(this.$store.state.downloaded);
      }
      Vue.set(this.downloaded, index, this.$store.state.downloaded[index]);
    }
  }
}

</script>

<style>
.container {
  margin-top : 20px;
  display : flex;
  flex-direction : column;
  align-items : center;
}
.my_spacer {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>