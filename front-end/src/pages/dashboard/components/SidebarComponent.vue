<script>
    export default{ 
        name: 'SideBarComponent'
    }
</script>

<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span><i class="fa fa-user"/></span>
            </div>

            <div class="info">
                <p class="name">João Victor</p>
                <p class="status">online</p>
            </div>
        </div>

        <div class="menu">
            <ul>
                <li>
                    <router-link :to="{name: 'home'}"><i class="fa fa-home" aria-hidden="true"/>
                        Início</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'clients'}"><i class="fa fa-user" aria-hidden="true"/>
                        Clientes</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'product'}"><i class="fa fa-box" aria-hidden="true"/>
                        Produtos</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'product'}"><i class="fa fa-store" aria-hidden="true"/>
                        Vendas</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'product'}"><i class="fa fa-chart-bar" aria-hidden="true"/>
                        Relatórios</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: white;
    margin-right: 10px;
}

.top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 25px;
    margin-top: 80px;
}

.info p {
    margin: 0;
    color: white;
}

.status {
    margin: 0;
    font-size: 12px;
}

.menu{
    padding: 10px 20px;
}

ul li {
    font-size: 20px;
    margin: 35px 0;
    font-weight: 200;
    list-style: none;
}

ul a{
    color: white;
    text-decoration: none;
}

ul a:hover {
    opacity: 0.7;
}
</style>