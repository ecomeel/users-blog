<script>
export default {
    props: {
        name: String,
        phone: String
    }
}
</script>
<template>
    <li>
        <h2>{{ name }}</h2>
        <p>{{ phone }}</p>
    </li>
</template>
<style>
</style>