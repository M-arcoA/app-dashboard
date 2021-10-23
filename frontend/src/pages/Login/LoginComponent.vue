<template>
    <div class="main">
        <div class="login">
            <div class="content-login">
                <header>
                    <h1>Welcome</h1>
                </header>
            <div class="form">
                <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-success" @click.prevent="login">Submit</button>
</form>
            </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'LoginComponent',

    data(){
        return {

        }
    },
    methods: {
        login(){
            this.$router.push({ name: 'home'})
        }
    }
    
}
</script>

<style lang="scss" src="./style.scss" scoped />

