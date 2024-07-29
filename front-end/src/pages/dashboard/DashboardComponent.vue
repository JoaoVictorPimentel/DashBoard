<script>
import NavBarComponent from './components/NavBarComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';

export default {
    components: { SidebarComponent, NavBarComponent },
    name: 'DashboardComponent'
}
</script>

<template>
    <div class="main">
        <div class="sidebar">
            <sidebar-component/>
        </div>

        <div class="content-right">
            <div class="navbar">
                <nav-bar-component/>
            </div>

            <div class="pages">
                <slot name="pages"></slot>
            </div>
        </div>
    </div>
</template>

<style src="./style.css" scoped />