<template lang="html">
	<div class="backtodo">
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">Doing</h3>
      </div>
      <div class="panel-body">

				<div class="panel panel-danger" v-for="task in doing">
		      <div class="panel-heading" >
		        <h3 class="panel-title">{{task.title}}</h3>
		      </div>
		      <div class="panel-body">
						<p>Description: {{task.description}}</p>
						<p>Point: {{task.point}}</p>
						<p>Assign to: {{task.assignto}}</p>
		      </div>
					<div class="panel-footer">
						<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#doingModal" @click="getData(task)">Detail</button>
					</div>
		    </div>

				<!-- Modal -->
				<div id="doingModal" class="modal fade" role="dialog">
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
								<button type="button" class="btn btn-info" data-dismiss="modal" @click="goTodo(alltask)">Todo</button>
				        <button type="button" class="btn btn-warning" data-dismiss="modal" @click="deleteData(alltask['.key'])">Delete</button>
								<button type="button" class="btn btn-info" data-dismiss="modal" @click="goDone(alltask)">Done</button>
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
      doing: this.$db.ref('task/doing')
    }
  },
  methods: {
    getData (todo) {
      this.alltask = todo
    },
    deleteData (todo) {
      this.$db.ref(`/task/todo/${todo}`).remove()
    },
    goDone (task) {
      this.$db.ref(`/task/todo/${task['.key']}`).remove()
      this.$db.ref(`/task/done`).push({
        assignto: task.assignto,
        description: task.description,
        point: task.point,
        status: task.status,
        title: task.title
      })
    },
    goTodo (task) {
      this.$db.ref(`/task/doing/${task['.key']}`).remove()
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
