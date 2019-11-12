<template>
    <div>
      <b-list-group>
        <b-list-group-item v-for="cat in categories" :key="cat.value" :to="`/categories/${cat.value}`">{{ cat.name }}</b-list-group-item>
      </b-list-group>
    </div>
</template>
<script>
import categories_arr from '@/data/categories'
export default {
    data() {
        return {};
    },
    computed: {
      categories() {
        let categories = categories_arr
        categories.forEach(cat => cat.name = this.htmlDecode(cat.name))
        return categories
      }
    },
    methods: {
      htmlDecode(input){
        var e = document.createElement('textarea')
        e.innerHTML = input
        // handle case of empty input
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
      }
    }
};
</script>