<template>
    <DashBoardComponent>
        <div class="content-pages" slot="slot-pages">
            <header class="title_pages">
                <p>Início</p>
            </header>
            <div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa-users'"  :qtd="'9750'"/>   
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Produtos'" :percentage="'17%'" :icon="'fa-box'"  :qtd="'250'"/>    
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Serviços'" :percentage="'3%'" :icon="'fa-store'"  :qtd="'270'"/>    
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Vendas'" :percentage="'25%'" :icon="'fa-chart-bar'"  :qtd="'33'"/>    
                    </div>

                    <div class="mt-5">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <ListsComponent  :users="users"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </DashBoardComponent>
</template>

<script>
import DashBoardComponent from '../DashBoard/DashBoardComponent';
import CardsComponent from '../../components/CardsComponent';
import ListsComponent from '../../components/ListsComponent';
const axios = require('axios');

export default {
    name: 'HomeComponent',
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            if(response.status ==200){
                this.users = response.data
            } else{
                console.error("Aconteceu um erro na API")
            }
        }
    },

    components: {
        DashBoardComponent,
        CardsComponent,
        ListsComponent,
    }
}
</script>

<style lang="scss" src="./style.scss" scoped />   
       