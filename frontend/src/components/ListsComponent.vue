<template>
    <div class="list">
        <div class="top">
            <p><strong>Clientes</strong></p>
        </div>

        <div class="content">
            <table class="table table-striped my_table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <th scope="row">{{ user.id }}</th>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                    </tr>
                </tbody>
            </table> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListsComponent',
    props: {
        users: Array,
    }
}
</script>

<style lang="scss" scoped>
    .list{
        width: 100%;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 3px;

    }
</style>