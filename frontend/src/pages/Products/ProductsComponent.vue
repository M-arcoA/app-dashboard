<template>
    <DashBoardComponent>
        <div slot="slot-pages" class="content-pages">
            <p>Produtos</p>
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