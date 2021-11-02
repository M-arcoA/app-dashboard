<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span>
                    <i class="fas fa-user-circle"></i>
                </span>
            </div>
            <div class="info">
                <p class="name">Nome do usuário</p>
                <p class="status">online</p>
            </div>    
        </div>
        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-home"></i> Início</router-link></li>
                <li><router-link :to="{name: 'products'}"><i class="fa fa-box"></i> Produtos</router-link></li>
                <li><router-link :to="{name: 'sales'}"><i class="fa fa-store"></i> Vendas</router-link></li>
                <li><router-link :to="{name: 'reports'}"><i class="fa fa-chart-bar"></i> Relatórios</router-link></li>
              
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBarComponent',

}
</script>

<style lang="scss">
    .sidebar {
        color: #fff;

        .top{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 25px 5px;

            .avatar{
                margin-right: 10px;

                span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 37px;       
                }
            }
            
            .info {
                .name {
                    margin: 0;
                }
                .status {
                    font-size: 12px;
                    color: #008000;
                }
            }
        }
        .menu{
            padding: 15px;
            margin-left: -30px;

            ul {
            
                li {
                    padding: 10px;
                    list-style-type: none;
                    border: none;
                    transition: 0.3s;

                    a {
                        color: #fff;
                        text-decoration: none;
                    }
                }

                li:hover{
                    background-color: #1E90FF;
                }
            }
        }
    }

</style>