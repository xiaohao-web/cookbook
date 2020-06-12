export const mutations = {

  //置空数据
  emptyData(state) {
    state.BoutiqueData = [];
  },
  
  changeData(state, data) {
    state[data.key] = data.value;
  },
  
}