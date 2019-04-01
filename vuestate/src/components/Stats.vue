<template>
  <div>
    <span>Total: {{ totalCount }}&nbsp;</span>
    <span>UnRead: {{ unReadCount }}&nbsp;</span>
    <span>Read: {{ readCount }}</span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Stats",
  computed: {
    ...mapGetters({
      readCount: "readCount",
      unReadCount: "unReadCount",
      totalCount: "totalCount"
    })
  }
};
</script>
