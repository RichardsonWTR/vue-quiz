<template>
    <div>
        <h1>Question categories </h1>
        <CategoryList/>
    </div>
</template>
<script>
import CategoryList from '@/components/CategoryList'

export default {
    name: 'categories',
    components: {
        CategoryList
    }
}
</script>