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
        status: "READ",
        id: 1
      },
      {
        message: "Invalid Record Data",
        type: "FAILED",
        status: "UNREAD",
        id: 2
      },
      {
        message: "Content Parsing Failed",
        type: "WARNING",
        status: "UNREAD",
        id: 3
      }
    ]
  },
  getters: {
    readCount: state => {
      return state.notifications.length;
    },
    unReadCount: state => {
      return state.notifications.length;
    },
    totalCount: state => {
      return state.notifications.length;
    }
  },
  mutations: {
    ADD_NOTIFICATION: (state, notification) => {
      notification.id = state.notifications.length + 1;
      notification.status = "UNREAD";
      state.notifications.unshift(notification);
    },
    ARCHIVE_NOTIFICATION: (state, notification) => {
      state.notifications.splice(notification, 1);
    }
  },
  actions: {
    archiveNotification: (context, notification) => {
      setTimeout(function() {
        context.commit("ARCHIVE_NOTIFICATION", notification);
      }, 1000);
    }
  }
});
