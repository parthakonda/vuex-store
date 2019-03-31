import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Awesome Title",
    notifications: [
      {
        message: "Record Saved Successfully",
        type: "SUCCESS",
        id: 1
      },
      {
        message: "Invalid Record Data",
        type: "FAILED",
        id: 2
      },
      {
        message: "Content Parsing Failed",
        type: "WARNING",
        id: 3
      }
    ]
  },
  mutations: {},
  actions: {}
});
