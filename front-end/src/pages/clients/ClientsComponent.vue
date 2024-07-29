<script>
    import DashboardComponent from '../dashboard/DashboardComponent.vue';
    
    export default {
        components: { DashboardComponent },
        name: 'ClientsComponent'
    }
</script>

<template>
    <dashboard-component>
        <template v-slot:pages>
            <div class="content-pages">
                <header class="title-pages">
                    <p>Clientes</p>
                </header>
                <p>Produto</p>
            </div>
        </template>
    </dashboard-component>
</template>

<style src="./style.css" scoped />

