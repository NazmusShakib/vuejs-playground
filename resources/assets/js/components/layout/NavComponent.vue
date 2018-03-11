<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand"> Laravel </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a class="nav-link"> Portfolio</a></router-link>
                    <router-link to="/sections"  activeClass="active" tag="li"><a class="nav-link"> Sections</a></router-link>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto navbar-right">
                    <li>
                        <router-link to="/login" activeClass="active" tag="li"><a class="nav-link">Login</a></router-link>
                    </li>
                    <li><a class="nav-link" href="#">Register</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>


</script>

<style>


</style>