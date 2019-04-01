<template>
  <div>
    <h3>
      <Stats></Stats>
    </h3>
    <table>
      <thead>
        <tr>
          <th>Notifications</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in notifications" v-bind:key="item.id">
          <td>{{ item.message }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Stats from "@/components/Stats.vue";

export default {
  name: "Notification",
  components: {
    Stats
  },
  computed: {
    ...mapState({
      notifications: "notifications"
    })
  }
};
</script>
