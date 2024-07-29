<script>
    import DashboardComponent from '../dashboard/DashboardComponent.vue';
    
    export default {
        components: { DashboardComponent },
        name: 'ProductComponent'
    }
</script>

<template>
    <dashboard-component>
        <template v-slot:pages>
            <div class="content-pages">
                <header class="title-pages">
                    <p>Produtos</p>
                </header>
                <p>Produto</p>
            </div>
        </template>
    </dashboard-component>
</template>

<style src="./style.css" scoped />
