import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import M from "materialize-css";

Vue.use(Vuex)
const serverURL = location.origin;

export default new Vuex.Store({
  state: {
    myApps: [],

  },
  mutations: {
    initMyApps(state, myApps) {
      state.myApps = myApps

    },
    addMyApp(state, myApp) {
      state.myApps.push(myApp)
    },
    updateMyApp(state, myApp) {
      let index = state.myApps.findIndex(a => a._id == myApp._id)
      if (index > -1) {
        state.myApps[index] = myApp
      }
    },
    deleteMyApp(state, myAppID) {
      let index = state.myApps.findIndex(a => a._id == myAppID)
      if (index > -1) {
        state.myApps.splice(index, 1)
      }
    },

  },
  actions: {
    initMyApps(context) {
      axios.get(serverURL + "/getir").then((res) => {
        context.commit('initMyApps', res.data)
      });
    },
    addMyApp(context, myApp) {

      axios.post(serverURL + "/addApp", myApp).then((res) => {
        let icon = res.data.status ? "done" : "";
        var toastHTML =
          res.data.message +
          '<button class="btn-flat toast-action"><i class="material-icons left">' +
          icon +
          "</i></button>";
        M.toast({ html: toastHTML });
        context.commit('addMyApp', myApp)
      });

    },
    updateMyApp(context, myApp) {

      axios
        .put(serverURL + "/cardInfo", myApp)
        .then((res) => {
          let icon = res.data.status ? "done" : "";
          var toastHTML =
            res.data.message +
            '<button class="btn-flat toast-action"><i class="material-icons left">' +
            icon +
            "</i></button>";
          M.toast({ html: toastHTML });
          context.commit('updateMyApp', myApp)
        });

    },
    deleteMyApp(context, myAppID) {
      axios
        .post(serverURL + "/sil", { _id: myAppID })
        .then((res) => {
          let icon = res.data.status ? "done" : "";
          var toastHTML =
            res.data.message +
            '<button class="btn-flat toast-action"><i class="material-icons left">' +
            icon +
            "</i></button>";
          M.toast({ html: toastHTML });
          context.commit('deleteMyApp', myAppID)
        });

    },
  },
  getters: {
    getMyapps(state) {
      return state.myApps
    }
  },
  modules: {
  }
})
