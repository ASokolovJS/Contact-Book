export default {

  actions: {},

  mutations: {
    showName(state) {
      let itemName = JSON.parse(localStorage.contList)
      let index = itemName.findIndex(t => t.id == localStorage.idCont)
      state.name = itemName[index].title
    },
    showCont(state) {
      if (localStorage.contList == null) {
        state.list = []
        state.contList = []
      } else {
        state.list = JSON.parse(localStorage.contList)
        state.contList = JSON.parse(localStorage.contList)
      }
    },
    showInfo(state) {
      let itemInfo = JSON.parse(localStorage.contList)
      let index = itemInfo.findIndex(t => t.id == localStorage.idCont)
      state.info = itemInfo[index].info
      state.contList = itemInfo[index]
    },

    addCont(state, newCont) {
      if (localStorage.contList == null) {
        state.contList.push(newCont)
        localStorage.contList = JSON.stringify(state.contList)
        state.contList = JSON.parse(localStorage.contList)
        localStorage.contList = JSON.stringify(state.contList)
        state.list = JSON.parse(localStorage.contList)
      } else {
        state.contList = JSON.parse(localStorage.contList)
        state.contList.push(newCont)
        localStorage.contList = JSON.stringify(state.contList)
        state.contList = JSON.parse(localStorage.contList)
        localStorage.contList = JSON.stringify(state.contList)
        state.list = JSON.parse(localStorage.contList)
      }
    },

    addInfo(state, newInfo) {
      state.contList.info.push(newInfo)
      state.info = JSON.parse(localStorage.contList)
      let index = state.info .findIndex(t => t.id == localStorage.idCont)
      state.info.splice(index, 1, state.contList)
      localStorage.contList = JSON.stringify(state.info)
    },

    editInfo(state, newInfo) {
      let indexInfo = state.info.findIndex(t => t.id == newInfo.id)
      state.temp = state.info[indexInfo]
      state.temp.title = newInfo.title
      state.temp.body = newInfo.body
      state.info[indexInfo] = state.temp
      state.sBack = JSON.parse(localStorage.contList)
      state.temp = JSON.parse(localStorage.contList)
      state.temp[indexInfo].info = state.info
      localStorage.contList = JSON.stringify(state.temp)
    },
    removeCont(state, id) {
      state.list = state.list.filter(t => t.id !== id);
      localStorage.contList = JSON.stringify(state.list)
    },
    removeInfo(state, id) {
      state.info = JSON.parse(localStorage.contList)
      state.temp = JSON.parse(localStorage.contList)
      let index = state.info .findIndex(t => t.id == localStorage.idCont)
      state.info = state.info[index].info.filter(t => t.id !== id)
      state.temp[index].info = state.info
      localStorage.contList = JSON.stringify(state.temp)
    },
    reserve(state){
      localStorage.contList = JSON.stringify(state.sBack)
    }
  },

  state: {
    name: [],
    info: [],
    contList: [],
    list: [],
    temp: [],
    sBack: [],
  },
  getters: {
    nameItem(state) {
      return state.name
    },
    infos(state) {
      return state.info
    },
    lists(state) {
      return state.list
    },
    contacts() {
      return localStorage.contList
    },
    ind(state) {
      return state.contList
    }
  },
}