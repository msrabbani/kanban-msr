<template lang="html">

  <div class="backlog">
    <div class="panel panel-primary" v-for="data in log">
      <div class="panel-heading">
        <h3 class="panel-title">{{data.title}}</h3>
      </div>
      <div class="panel-body">
        {{data.description}}
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      alltask: {
      }
    }
  },
  firebase: function () {
    return {
      log: this.$db.ref('task/log')
    }
  },
  methods: {
    getData (log) {
      this.alltask = log
    }
  }
}
</script>

<style lang="css">
</style>
