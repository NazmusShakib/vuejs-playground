<template>
    <div class="container">

        <appNavBar></appNavBar>

        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>

    </div>
</template>

<script>
    import NavBar from './components/layout/NavComponent.vue';
    export default{
        components: {
            appNavBar: NavBar
        }
    }

</script>


<style>

</style>