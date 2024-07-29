<script>
    export default {
        name: 'CardComponent',
        props: ['type', 'porcentagem', 'icon', 'qtd']
    }
</script>

<template>
    <div class="my-card">
        <div class="top">
            <h3>{{ type }}</h3>
            <p class="porcentagem"><i class="fa fa-arrow-up"/>{{ porcentagem }}</p>
        </div>

        <div class="footer">
            <i :class="['fa icon', icon]"/>
            <p class="qtd">{{ qtd }}</p>
        </div>
    </div>
</template>

<style scoped>
.my-card {
    display: flex;
    flex-direction: column;
    background-color: #8d86f4;
    padding: 15px;
    border-radius: 10px;
    color: white;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}

.porcentagem{
    color: #79f287;
}

.icon {
    font-size: 30px;
}

.qtd {
    font-size: 25px;
}
</style>