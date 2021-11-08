<template>
    <div class="my_card">
        <div class="content top">
            <h3> {{ type }}</h3>
            <p class="percentage"><i class="fas fa-arrow-up"></i> {{ percentage }}</p>
        </div>
        <div class="content footer">
            <i :class="['fa ico', icon]"></i>
            <p class="qtd">{{ qtd }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardsComponent',
    props: {
        type: String,
        percentage: String,
        icon: String,
        qtd: String
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

    .my_card{
        display: flex;
        flex-direction: column;
        background-color: $light-gray;
        width: 10em;
        padding: 15px;
        border-radius: 7px;
        color: $white;
        align-content: center;

        .content{
            display: flex;
            justify-content: space-between;
           
        }

        .top {
           .percentage{
               font-size: 20px;
               color: $green;
           }

            .fa-arrow-up {
                font-size: 15px;
            }
        }

        .footer{
           
           .ico{
               font-size: 40px;
           }
           .qtd{
               font-size: 30px;
               margin: 0;
           }
        }
    }
</style>