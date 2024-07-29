<script>
    import CardComponent from '../../components/CardComponent.vue';
    import ListsComponent from '../../components/ListsComponent.vue';
    import DashboardComponent from '../dashboard/DashboardComponent.vue';
    import axios from 'axios';

    
    export default {
        components: { DashboardComponent, CardComponent, ListsComponent },
        name: 'HomeComponent',

        data() {
            return {
                clients: [],
                products: []
            }
        },

        mounted() {
            this.getClients()
        },

        methods: {
            async getClients() { 
                try {
                    let response = await axios.get('/');
                    this.clients = response.data.clients
                    this.products = response.data.products
                } catch (error) {
                    console.error('Erro ao buscar usuários:', error);
                }
            }
        }
    }
</script>

<template>
    <dashboard-component>
        <template v-slot:pages>
            <div class="content-pages">
                <header class="title-pages">
                    <p>Inicio</p>
                </header>

                <div>
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <card-component :type="'Clientes'" :porcentagem="'7%'" :icon="'fa-users'" :qtd="clients.length"/>
                        </div>
                        <div class="col-12 col-md-3">
                            <card-component :type="'Produtos'" :porcentagem="'12%'" :icon="'fa-box'" :qtd="products.length"/>
                        </div>
                        <div class="col-12 col-md-3">
                            <card-component :type="'Serviços'" :porcentagem="'30%'" :icon="'fa-store'" :qtd="products.length"/>
                        </div>
                        <div class="col-12 col-md-3">
                            <card-component :type="'Relatórios'" :porcentagem="'27%'" :icon="'fa-chart-bar'" :qtd="products.length"/>
                        </div>
                    </div>
                </div>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <lists-component :data="clients" description="Clientes" :columns="['Nome', 'Email']"/>
                        </div>
                        <div class="col-12 col-md-6">
                            <lists-component :data="products" description="Produtos" :columns="['Nome', 'Valor']"/>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </dashboard-component>
</template>

<style scoped />
