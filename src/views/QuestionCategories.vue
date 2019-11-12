<template>
    <div>
        <h1>Categories </h1>
        <h4>Select a category below to start testing your knowledge!</h4>
        <p>For each category you will receive 10 random questions</p>
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