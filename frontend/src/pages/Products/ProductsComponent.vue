<template>
    <DashBoardComponent>
        <div slot="slot-pages" class="content-pages">
            <header class="title_pages">
                <p>Produtos</p>
            </header>

        </div>
    </DashBoardComponent>
</template>

<script>
import DashBoardComponent from '../DashBoard/DashBoardComponent';

export default {
    name: 'ProductsComponent',

    components: {
        DashBoardComponent,
    }
}
</script>