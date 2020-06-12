export const mutations = {

  //置空数据
  emptyData(state) {
    state.isBottom = false;
    state.count = 15;
    state.start = 0;
    state.TimedomainData = [];
    state.allTimedomainData = [];
  },
  
  changeData(state, data) {
    state[data.key] = data.value;
  },
  
  loadSearchData(state) {
   //每次获取15条数据
    state.TimedomainData.push(...state.allTimedomainData.slice(state.start, state.count + state.start));
  
    state.start = state.count;
  },

}