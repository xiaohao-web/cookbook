export const mutations = {

  //置空数据
  emptyData(state) {
    state.isBottom = false;
    state.count = 15;
    state.start = 0;
    state.searchData = [];
    state.allsearchData = [];
  },

  changeData(state, data) {
    state[data.key] = data.value;
  },

  loadSearchData(state) {
   //每次获取15条数据
    state.searchData.push(...state.allsearchData.slice(state.start, state.count + state.start));

    state.start = state.count;
  },


}