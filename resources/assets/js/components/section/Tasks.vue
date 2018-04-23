<template>
    <div>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Task Name</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(task, index) in tasks">
                <td>{{ task.task_name }}</td>
                <td>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>

                    <button class="btn btn-danger btn-sm" v-on:click="deleteTask(index, task.id)">
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>

            <tr v-for="(row, index) in rows">
                <td>
                    <input type="text" class="form-control" v-model="row.name">
                    <input type="hidden" class="form-control" v-model="row.sectionID">
                </td>
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
</template>

<script>

    export default {
        props: {
            tasks: {
                type: Array,
                required: true,
            }, sectionID: {
                type: [Number, String],
                required: false,
            }
        },
        data() {
            return {
                rows: []
            };
        },
        methods: {

            deleteTask(index, id) {
                let uri = this.$apiUrl + `tasks/${id}`;
                this.axios.delete(uri, {headers: { Authorization: "Bearer " + this.$localStorage.get('token') }}).then((response) => {
                    this.tasks.splice(index, 1);
                    this.$snotify.success(response.data);
                });
            },

            saveElement: function (index) {

                // console.log(this.rows[index]);

                let element = this.rows[index];
                let uri = this.$apiUrl + 'tasks';
                this.axios.post(uri, element, {headers: { Authorization: "Bearer " + this.$localStorage.get('token') }}).then((response) => {
                    // this.tasks.push(response.data.item);
                    this.$parent.fetchSections();
                    this.rows.splice(index, 1);
                    this.$snotify.success(response.data.message);
                })
            },

            addRow: function (index) {
                var elem = document.createElement('tr');
                this.rows.push({
                    name: "",
                    sectionID: this.sectionID
                });
            },

            removeElement: function (index) {
                this.rows.splice(index, 1);
            }
        },
        mounted() {
            // console.log(this.tasks);
        }
    }


</script>