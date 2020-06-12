//导入state
import {state} from './state'

//导入mutations
import {mutations} from './mutations'

export const RecordModule = {
  namespaced: true,
  state,
  mutations
}