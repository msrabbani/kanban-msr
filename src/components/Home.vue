<template>

  <div class="home">
    <Navbar/>
    <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Create Task</button>

  <!-- Modal -->
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">New Task</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
  <fieldset>
    <div class="form-group">
      <label for="inputEmail" class="col-lg-2 control-label">Title</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" v-model="title" placeholder="Title">
      </div>
    </div>

    <div class="form-group">
      <label for="inputDescription" class="col-lg-2 control-label">Description</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" v-model="description" placeholder="Description">
      </div>
    </div>

    <div class="form-group">
      <label for="inputPoint" class="col-lg-2 control-label">Point</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" v-model="point" placeholder="Point">
      </div>
    </div>

    <div class="form-group">
      <label for="inputAssigned" class="col-lg-2 control-label">Assigned To</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" v-model="assignto" placeholder="Assigned To">
      </div>
    </div>

    <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="reset" class="btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-primary" data-dismiss="modal" @click="addTask">Submit</button>
      </div>
    </div>
  </fieldset>
</form>
</div>

        </div>

    </div>
  </div>

    <div class="row">
      <div class="container">
          <div class="col-md-3">
            <Backlog/>
          </div>
          <div class="col-md-3">
            <Todo/>
          </div>
          <div class="col-md-3">
            <Doing/>
          </div>
          <div class="col-md-3">
            <Done/>
          </div>
    </div>
    </div>


  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Backlog from '@/components/Backlog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'

export default {
  name: 'home',
  data () {
    return {
      title: '',
      description: '',
      point: '',
      assignto: ''
    }
  },
  components: {
    Navbar,
    Backlog,
    Todo,
    Doing,
    Done
  },
  methods: {
    addTask () {
      this.$db.ref('task/log/').push({
        title: this.title,
        description: this.description,
        point: this.point,
        assignto: this.assignto,
        status: 'backlog'
      })
      this.title = ''
      this.description = ''
      this.point = ''
      this.assignto = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
