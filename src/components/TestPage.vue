<template>
    <div>
        <h3>This is a Test Page</h3>
        <p>this is your id : {{ id }}</p>
    </div>
</template>
<script>
import { useRoute }  from 'vue-router';
import { computed } from 'vue';
export default {
    setup(){
        const route = useRoute();
        const id = computed(() => route.params.id);
    }
}
</script>
