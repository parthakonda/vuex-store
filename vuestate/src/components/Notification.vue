<template>
  <div>
    <form @submit.prevent="addNotification">
      Message: <input type="text" v-model="message" />
      Type: 
      <select v-model="type">
        <option
          :value="item"
          v-for="(item, index) in notificationTypes"
          v-bind:key="index"
          >{{ item }}
        </option>
      </select>
      <button>Add</button>
    </form>
    <h3>
      <Stats></Stats>
    </h3>
    <table>
      <thead>
        <tr>
          <th>Notifications</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in notifications" v-bind:key="item.id">
          <td>{{ item.message }}</td>
          <td>
            <input
              type="button"
              value="delete"
              @click="removeNotification(item)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Stats from "@/components/Stats.vue";

export default {
  name: "Notification",
  data: (function(){
    return {
      message: "",
      type: "",
      notificationTypes: ["SUCCESS", "FAILED", "WARNING"]
    }
  }),
  newNotification: "",
  components: {
    Stats
  },
  computed: {
    ...mapState({
      notifications: "notifications"
    })
  },
  methods: {
    ...mapMutations(["ADD_NOTIFICATION"]),
    ...mapActions(["archiveNotification"]),
    addNotification: function() {
      this.ADD_NOTIFICATION({
        message: this.message,
        type: this.type
      });
      this.message = "";
      this.type = "";
    },
    removeNotification: function(notification) {
      this.archiveNotification(notification);
    }
  }
};
</script>
