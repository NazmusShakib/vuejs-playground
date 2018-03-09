<template>
    <div>

        <div class="row">

            <div class="col-md-12">
                <div v-if="rows.length < 1">
                    <button class="btn btn-primary form-control" @click="addRow" style="margin: 10px 0px 10px 0px;">
                        Add New
                    </button>
                </div>

                <div v-for="(row, index) in rows" style="background-color: #fff; padding: 10px;">
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input type="text" id="title" name="title" class="form-control" v-model="row.title">
                    </div>

                    <div class="form-group">
                        <label for="description">Description:</label>
                        <textarea id="description" class="form-control" v-model="row.description" cols="20"
                                  rows="5">
                        </textarea>
                    </div>

                    <button v-on:click="saveElement(index);" class="btn btn-success">
                        <i class="fa fa-floppy-o fa-lg" aria-hidden="true"></i> Save
                    </button>
                    |
                    <button v-on:click="removeElement(index);" class="btn btn-danger">
                        <i class="fa fa-minus-circle fa-lg" aria-hidden="true"></i> Remove
                    </button>
                </div>

            </div>
            <div class="clearfix"></div>
            <br><br>

            <div class="col-sm-6 col-md-4" v-for="item in items">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-10">
                                <h5>{{item.title}}</h5>
                                <a class="pull-right" style="color: red; cursor: pointer;"
                                   v-on:click="deleteItem(item.id)">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">

                        {{item.description}}

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
                    description: "",
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