<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-10"><h2>Items</h2></div>
                            <div class="pull-right">
                                <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">Create Item
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">

                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <td>ID</td>
                                <td>Item Name</td>
                                <td>Item Price</td>
                                <td>Actions</td>
                            </tr>
                            </thead>

                            <tbody>
                            <tr v-for="item in items">
                                <td>{{ item.id }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.price }}</td>
                                <td>
                                    <router-link :to="{name: 'EditItem', params: { id: item.id }}"
                                                 class="btn btn-primary">Edit
                                    </router-link>
                                </td>
                                <td>
                                    <button class="btn btn-danger" v-on:click="deleteItem(item.id)">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        data() {
            return {
                items: []
            }
        },

        created: function () {
            this.fetchItems();
        },

        methods: {
            fetchItems() {
                let uri = 'http://localhost:8080/items';
                this.axios.get(uri).then((response) => {
                    this.items = response.data;
                });
            },
            deleteItem(id) {
                let uri = `http://localhost:8080/items/${id}`;
                this.items.splice(id, 1);
                this.axios.delete(uri);
            }
        }
    }
</script>