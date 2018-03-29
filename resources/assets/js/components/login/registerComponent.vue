<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">

                    <form>

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input id="name"
                                       type="text"
                                       class="form-control"
                                       v-model="userData.name"
                                       name="name"
                                       v-validate="'required|alpha_spaces'"
                                       autofocus>
                                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                                    <span v-show="errors.has('name')" class="text-danger help is-danger">
                                           {{ errors.first('name') }}
                                    </span>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email"
                                       type="email"
                                       v-validate="'required|email'"
                                       name="email"
                                       :class="{'input': true, 'is-danger': errors.has('email') }"
                                       class="form-control"
                                       v-model="userData.email">
                                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                                    <span v-show="errors.has('email')" class="text-danger help is-danger">
                                       {{ errors.first('email') }}
                                   </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password"
                                       type="password"
                                       class="form-control"
                                       v-model="userData.password">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm
                                Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm"
                                       type="password"
                                       class="form-control"
                                       v-model="userData.password_confirmation">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit"
                                class="btn btn-primary"
                                @click.prevent="submitted"
                                :disabled="errors.any()">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                userData: {
                    'name': '',
                    'email': '',
                    'password': '',
                    'password_confirmation': ''
                }
            }
        },
        methods: {
            submitted() {
                let element = this.userData;
                let uri = this.$webUrl + 'register';


                this.$validator.validateAll().then(isValid => {
                    if (isValid) {
                        this.axios.post(uri, element)
                            .then((response) => {
                                this.$notify({ message: response.data, type: 'success'})
                                this.$router.push({ name: 'login' });
                            })
                            .catch((error) => {
                                this.$notify({ message: error.response.data.message, type: 'danger'})
                            });
                    }
                });
            }
        },

        mounted() {
            console.log('Log from register component.');
        }

    }


</script>