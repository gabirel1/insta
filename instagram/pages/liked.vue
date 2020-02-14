<template>
  <div>
    <v-app-bar fixed height="65px" style="background-color:white" white>
      <v-spacer>
      <v-toolbar-title style="color :black">Instagram</v-toolbar-title>
      </v-spacer>
      <v-btn icon>
      <nuxt-link :to="dest">
      <v-app-bar-nav-icon style="none">⬅️</v-app-bar-nav-icon>
      </nuxt-link>
      </v-btn>
    </v-app-bar>
    <div class="container">
      <v-card class="my_spacer" v-for="index in 3" :key="index" style="container">
        <v-card v-if="liked[index - 1]" width="350px">
        <v-img :src="require('../assets/' + imgs[index - 1])"></v-img>
        <v-card-title>{{titles[index - 1]}}</v-card-title>
        <v-card-text>{{desc[index - 1]}}</v-card-text>
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
    liked : this.$store.state.liked,
    imgs : ['1.png', '2.png', '5.png'],
    titles : ['Viki Odintcova', 'Lionel Messi (La Pulga)', 'Rosé'],
    desc : ['Привет всем', 'qué partido !', '안녕 여러분!'],
    dest : '/'
    }
  },
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
.none {
  text-decoration: none;
}
</style>