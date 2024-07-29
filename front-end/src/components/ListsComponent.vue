<script>
export default {
    name: 'ListsComponente',
    props: {
        data: Array,
        description: String,
        columns: Array
    }
}
</script>

<template>
    <div class="lists">
        <div class="top">
            <p><strong>{{ description }}</strong> <span class="badge text-bg-secondary">{{ data.length }}</span></p>
            <hr>
        </div>

        <div class="content">
            <table class="table table-striped my_table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{ columns[0] }}</th>
                        <th scope="col">{{ columns[1] }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ (description === 'Clientes') ? item.email : item.value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.lists {
    width: 100%;
    padding: 35px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
}

.top p {
    font-size: 20px;
}
</style>