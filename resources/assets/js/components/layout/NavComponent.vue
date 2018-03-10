<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link to="/" class="navbar-brand"> Laravel </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <router-link to="/portfolio" activeClas="active" tag="li">Portfolio</router-link>
                    <router-link to="/sections"  activeClas="active" tag="li">Sections</router-link>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto navbar-right">
                    <li><a class="nav-link" href="#">Login</a></li>
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