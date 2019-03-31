<template>
  <div class="hello">
    {{ custom }}
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
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  // can be an array
  // computed: mapState([
  //   "title"
  // ])
  // can be an object
  // computed: mapState({
  //   custom: "title"
  // })
  // So that you can inject other stuff in computed, instead of blocking
  // it with only mapstate
  computed: {
    ...mapState({
      custom: "title",
      notifications: "notifications"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
