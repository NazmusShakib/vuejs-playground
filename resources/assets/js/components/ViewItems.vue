<template>
    <div>

        <div class="row">
            <div class="col-md-12">
                <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
            </div>
            <div class="col-md-6" v-for="(section, index) in sections">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-10"><h3>{{section.name}}</h3></div>
                            <!--<div class="pull-right">
                                <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">Create Item
                                </router-link>
                            </div>-->
                        </div>
                    </div>

                    <div class="card-body">

                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <td>Task Name</td>
                                <td>Actions</td>
                            </tr>
                            </thead>

                            <tbody>
                            <tr v-for="task in section.tasks">
                                <td>{{ task.task_name }}</td>
                                <td>
                                    <router-link :to="{name: 'EditItem', params: { id: task.id }}"
                                                 class="btn btn-primary btn-sm"><i class="fa fa-pencil-square-o"
                                                                                   aria-hidden="true"></i>
                                    </router-link>
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteTask(task.id)">
                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>

                            <tr v-for="(row, index) in rows">
                                <td><input type="text" class="form-control" v-model="row.name"></td>
                                <td>
                                    <a v-on:click="saveElement(index);" style="cursor: pointer; color: blue;">
                                        <i class="fa fa-floppy-o fa-lg" aria-hidden="true"></i>
                                    </a> |
                                    <a v-on:click="removeElement(index);" style="cursor: pointer; color: red;">
                                        <i class="fa fa-minus-circle fa-lg" aria-hidden="true"></i>
                                    </a>
                                </td>
                            </tr>


                            </tbody>
                        </table>

                        <div>
                            <button class="button btn-primary" @click="addRow">Add New</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>


        <!-- Modal Component -->

        <!--<div>
            <b-modal id="modalPrevent"
                     ref="modal"
                     title="Submit your name"
                     @ok="handleOk"
                     @shown="clearName">
                <form @submit.stop.prevent="handleSubmit">
                    <b-form-input type="text"
                                  placeholder="Enter your name"
                                  v-model="name"></b-form-input>
                </form>
            </b-modal>
        </div>
        -->
    </div>
</template>


<script>

    export default {
        data() {
            return {
                sections: [],
                tasks: [],
                rows: []
            };
        },

        created: function () {
            this.fetchSections();
        },

        methods: {
            fetchSections() {
                let uri = 'http://localhost:8080/sections';
                this.axios.get(uri).then((response) => {
                    this.sections = response.data;
                });
            },

            deleteTask(id) {
                let uri = `http://localhost:8080/tasks/${id}`;
                this.tasks.splice(id, 1);
                this.axios.delete(uri);
                this.fetchSections();
            },

            addRow: function (index) {
                var elem = document.createElement('tr');
                this.rows.push({
                    name: "",
                    section_id: ""
                });
            },

            saveElement: function (index) {
                //let element = this.rows.pop(index);
                let element = this.rows[index];
                let uri = 'http://localhost:8080/tasks';
                this.axios.post(uri, element).then((response) => {
                    this.$router.push({name: 'DisplayItem'})
                });

                this.rows.splice(index, 1);

                this.fetchItems();
            },

            removeElement: function (index) {
                this.rows.splice(index, 1);
            },
        }
    }
</script>