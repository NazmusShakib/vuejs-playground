<template>

    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form method="POST" action="javascript:void(0)">

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email"
                                       type="email"
                                       v-model="user.email"
                                       class="form-control"
                                       required autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password"
                                       type="password"
                                       v-model="user.password"
                                       class="form-control"
                                       name="password"
                                       required>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary" @click.prevent="login">
                                    Login
                                </button>

                                <a class="btn btn-link" href="#">
                                    Forgot Your Password!
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!---->

</template>

<script>
    export default {

        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login: function () {
                axios.post(this.$apiUrl + 'login', this.user)
                    .then((response) => {

                        Object.keys(response.data).forEach((key) => {
                            this.$localStorage.set(key, response.data[key]);
                        });

                        this.$router.push({name: 'portfolio'});

                    })
                    .catch((error) => {
                        this.$notify({message: 'Failed to login.', type: 'danger'})
                    })
            },
        },

        mounted() {
            this.$localStorage.clear()
        }
    }
</script>
