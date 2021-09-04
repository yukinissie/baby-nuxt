<template>
  <h1>{{ this.slug }}</h1>
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug // "/abc" パスにアクセスすると、slug は "abc" になります。
      return { slug }
    },
    transition: 'fade'
  }
</script>