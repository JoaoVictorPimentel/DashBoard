<script>
export default {
    name: 'LoginComponent',
    methods: {
        login() {
            this.$router.push({name: 'home'})
        }
    }
}
</script>
<template>
    <div class="main">
        <div class="box-login">
            <header>
                <h1>Login</h1>
            </header>

            <div class="form">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                            placeholder="Digite seu email" required>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword"
                            placeholder="Digite sua senha" required>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="login()">Entrar</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style src="./style.css" scoped/>