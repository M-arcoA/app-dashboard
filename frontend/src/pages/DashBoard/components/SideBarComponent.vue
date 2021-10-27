<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span>
                    <i class="fas fa-user-circle"></i>
                </span>
            </div>
            <div class="info">
                <p class="name">Marco Aurélio</p>
                <p class="status">online</p>
            </div>
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
        color: white;

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
                }
            }
        }
    }

</style>