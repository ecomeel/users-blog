<script>
export default {
    props: {
        post: Object
    }
}
</script>
<template>
    <li class="post">
        <h3 class="post__title">{{ post.title }}</h3>
        <p class="post__body">{{ post.body }}</p>
    </li>
</template>
<style lang="scss" scoped>
    .post {
        padding: 15px;
        min-width: 200px;
        border: 1px solid black;
        border-radius: 10px;

        &__title {
            padding-bottom: 10px;

            font-weight: 700;

            border-bottom: 1px solid black;
        }
        &__body {
            padding-top: 10px;
        }
    }
</style>