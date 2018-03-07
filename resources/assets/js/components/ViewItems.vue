<template>
    <div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-10"><h2>Items</h2></div>
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
                            <td>Item Name</td>
                            <td>Actions</td>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="item in items">
                            <td>{{ item.name }}</td>
                            <td>
                                <router-link :to="{name: 'EditItem', params: { id: item.id }}"
                                             class="btn btn-primary btn-sm"><i class="fa fa-pencil-square-o"
                                                                        aria-hidden="true"></i>
                                </router-link>
                                <button class="btn btn-danger btn-sm" v-on:click="deleteItem(item.id)">
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
</template>


<script>

    export default {
        data() {
            return {
                items: [],
                rows: []
            };

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
                this.fetchItems();
            },

            addRow: function () {
                var elem = document.createElement('tr');
                this.rows.push({
                    name: "",
                });
            },

            saveElement: function (index) {
                //let element = this.rows.pop(index);
                let element = this.rows[index];
                let uri = 'http://localhost:8080/items';
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