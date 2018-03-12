<template>

    <div class="row">
        <div class="col-md-6" v-for="section in sections">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <h3>{{section.name}}</h3>
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

                <tasks :tasks="section.tasks"></tasks>

                        </tbody>
                    </table>

                    <div>
                        <button class="button btn-primary" @click="addRow">Add New</button>
                    </div>

                </div>

            </div>
        </div>
    </div>


</template>

<script>

    import Tasks from './Tasks.vue';

    export default {
        data() {
            return {
                sections: [],
                tasks: []
            };
        },

        created: function () {
            this.fetchSections();
        },

        methods: {
            fetchSections() {
                let uri = this.$apiUrl + 'sections';
                this.axios.get(uri).then((response) => {
                    this.sections = response.data;
                });
            },
        },
        components: {
            tasks: Tasks
        }
    }
</script>