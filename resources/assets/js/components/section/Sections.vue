<template>

    <div class="row">
        <div class="col-md-6" v-for="section in sections">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-10"><h3>{{section.name}}</h3></div>
                    </div>
                </div>

                <app-tasks v-for="tasks in section.tasks" :tasks="tasks"></app-tasks>

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
            appTasks: Tasks
        }

    }
</script>