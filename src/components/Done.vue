<template lang="html">
	<div class="backtodo">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">Done</h3>
      </div>
      <div class="panel-body">

				<div class="panel panel-success" v-for="task in done">
		      <div class="panel-heading" >
		        <h3 class="panel-title">{{task.title}}</h3>
		      </div>
		      <div class="panel-body">
						<p>Description: {{task.description}}</p>
						<p>Point: {{task.point}}</p>
						<p>Assign to: {{task.assignto}}</p>
		      </div>
					<div class="panel-footer">
						<button type="button" class="btn btn-success" data-toggle="modal" data-target="#doneModal" @click="getData(task)">Detail</button>
					</div>
		    </div>

				<!-- Modal -->
				<div id="doneModal" class="modal fade" role="dialog">
				  <div class="modal-dialog">

				    <!-- Modal content-->
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal">&times;</button>
				        <h4 class="modal-title">{{alltask.title}}</h4>
				      </div>
				      <div class="modal-body">
								<p>Description: {{alltask.description}}</p>
								<p>Point: {{alltask.point}}</p>
								<p>Assign to: {{alltask.assignto}}</p>
				      </div>
				      <div class="modal-footer">
								<button type="button" class="btn btn-info" data-dismiss="modal" @click="goDoing(alltask)">Doing</button>
				        <button type="button" class="btn btn-warning" data-dismiss="modal" @click="deleteData(alltask['.key'])">Task Done</button>
				      </div>
				    </div>
      </div>
    </div>

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
      done: this.$db.ref('task/done')
    }
  },
  methods: {
    getData (todo) {
      this.alltask = todo
    },
    deleteData (todo) {
      this.$db.ref(`/task/todo/${todo}`).remove()
    },
    goDoing (task) {
      this.$db.ref(`/task/done/${task['.key']}`).remove()
      this.$db.ref(`/task/doing`).push({
        assignto: task.assignto,
        description: task.description,
        point: task.point,
        status: task.status,
        title: task.title
      })
    }
  }
}
</script>

<style lang="css">
</style>
