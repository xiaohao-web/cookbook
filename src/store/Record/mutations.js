export const mutations = {

  //置空数据
  emptyData(state) {
    state.isBottom = false;
    state.count = 15;
    state.start = 0;
    state.LikeData = [];
    state.allLikeData = [];
  },

  changeData(state, data) {
    state[data.key] = data.value;
  },

  loadLikeData(state) {
   //每次获取15条数据
    state.LikeData.push(...state.allLikeData.slice(state.start, state.count + state.start));

    state.start = state.count;
  },


}