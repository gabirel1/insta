import Vuex from 'vuex';

const store = () => {
    return new Vuex.Store ({
        state: {
            liked : [false , false, false],
            downloaded : [false, false, false]
        },
        mutations: {
            addLike(state, index) {
                state.liked[index] = true;
            },
            deleteLike(state, index) {
                state.liked[index] = false;
            },
            addDownloaded(state, index) {
                state.downloaded[index] = true;
            }
        }
    })
}

export default store