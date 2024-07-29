<script>
    export default{ 
        name: 'NavBarComponent',

        methods: {
            logout() {
                this.$router.push({name: 'login'})
            }
        }
    }
</script>

<template>
    <div class="navbar">
        <h3 class="logo"><i class="fas fa-star"></i>Logo</h3>
        <a class="logout" @click.prevent="logout" href="">Sair <i class="fas fa-sign-out-alt"/></a>
    </div>

</template>

<style scoped>
.logo{
    color: white;
}

.logout {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

.logout:hover{
    opacity: 0.7;
}

</style>