<template>
    <div>
        <appNavBar></appNavBar>

        <div class="container">

                <router-view></router-view>

        </div>
    </div>
</template>

<script>
    import NavBar from './components/layout/NavComponent.vue';

    export default {
        components: {
            appNavBar: NavBar
        }
    }

</script>


<style>

</style>