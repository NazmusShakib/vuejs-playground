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

                    <tasks :tasks="section.tasks" :sectionID="section.id"></tasks>

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
                tasks: [],
                sectionID: '',
            };
        },

        created: function () {
            this.fetchSections();
        },

        methods: {
            fetchSections() {
                let uri = this.$apiUrl + 'sections';
                this.axios.get(uri, {headers: { Authorization: "Bearer " + this.$localStorage.get('token') }})
                    .then((response) => {
                    this.sections = response.data;
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        },
        components: {
            tasks: Tasks,
        },
        mounted() {
            // console.log(this.newTask);
        }
    }
</script>