<script>
export default {
    props: {
        post: Object
    }
}
</script>
<template>
    <li class="post">
        <h3 class="post__titlle">{{ post.title }}</h3>
        <p class="post__body">{{ post.body }}</p>
    </li>
</template>
<style lang="scss" scoped>
    .post {
        border: 1px solid black
    }
</style>