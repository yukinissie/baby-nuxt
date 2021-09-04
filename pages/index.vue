<template>
<div>
  <h1>{{ post.title }}</h1>
  <h1>hi</h1>
</div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const  post  = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    return { post }
  }
}
</script>