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
            <tr v-for="task in tasks">
                <td>{{ task.task_name }}</td>
                <td>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>

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
</template>

<script>

    export default {
        props: ['tasks'],
        data() {
            return {
                rows: []
            };
        },
        methods: {

            deleteTask(id) {
                let uri = this.$apiUrl + `tasks/${id}`;
                this.tasks.splice(id, 1);
                this.axios.delete(uri);
                this.fetchSections();
            },

            saveElement: function (index) {
                let element = this.rows[index];
                let uri = this.$apiUrl + 'tasks';
                this.axios.post(uri, element).then((response) => {
                    this.$router.push({name: 'DisplayItem'})
                });

                this.rows.splice(index, 1);

                this.fetchItems();
            },

            addRow: function (index) {
                var elem = document.createElement('tr');
                this.rows.push({
                    name: "",
                    section_id: ""
                });
            },

            removeElement: function (index) {
                this.rows.splice(index, 1);
            }
        }
    }


</script>