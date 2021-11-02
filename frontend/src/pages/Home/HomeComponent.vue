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
                </div>
            </div>


        </div>
    </DashBoardComponent>
</template>

<script>
import DashBoardComponent from '../DashBoard/DashBoardComponent';
import CardsComponent from '../../components/CardsComponent';

export default {
    components: {
        DashBoardComponent,
        CardsComponent,
    }
}
</script>

<style lang="scss" src="./style.scss" scoped />   
       