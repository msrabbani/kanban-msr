<template lang="html">

  <div class="backlog">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Backlog</h3>
      </div>
      <div class="panel-body">

				<div class="panel panel-primary" v-for="task in log">
		      <div class="panel-heading" >
		        <h3 class="panel-title">{{task.title}}</h3>
		      </div>
		      <div class="panel-body">
						<p>Description: {{task.description}}</p>
						<p>Point: {{task.point}}</p>
						<p>Assign to: {{task.assignto}}</p>
		      </div>
					<div class="panel-footer">
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#backlogModal" @click="getData(task)">Detail</button>
					</div>
		    </div>

				<!-- Modal -->
				<div id="backlogModal" class="modal fade" role="dialog">
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
				        <button type="button" class="btn btn-warning" data-dismiss="modal" @click="deleteData(alltask['.key'])">Delete</button>
								<button type="button" class="btn btn-info" data-dismiss="modal" @click="goTodo(alltask)">Todo</button>
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
      log: this.$db.ref('task/log'),
      todo: this.$db.ref('task/todo'),
      doing: this.$db.ref('task/doing'),
      done: this.$db.ref('task/done')
    }
  },
  methods: {
    getData (log) {
      this.alltask = log
    },
    deleteData (log) {
      this.$db.ref(`/task/log/${log}`).remove()
    },
    goTodo (task) {
      this.$db.ref(`/task/log/${task['.key']}`).remove()
      this.$db.ref(`/task/todo`).push({
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
