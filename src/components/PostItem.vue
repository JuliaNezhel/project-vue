<template>
  <div class="post">
    <div>
      <div><strong>{{ post.id }}</strong></div>
      <div><strong>Описание/Тело </strong>{{ post.body }}</div>
      <div><strong>Заголовок </strong>{{ post.title }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">open</my-button>
      <my-button @click='$emit("remove",post)' >delete</my-button>
    </div>
  </div>
</template>
<script>



import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props: {
    post: {
      type: Object,
      required: true
    }
  },
}
</script>

<style>
.post {
  padding: 15px;
  border: 2px solid tomato;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>