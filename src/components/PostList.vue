<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <transition-group name="user-list">
      <post-item v-for="post in posts"
                 v-bind:post="post"
                 :key="post.id"
                 @remove="$emit('remove', post)"
      />
    </transition-group>

  </div>
  <h2 style="color: red" v-else >
<!--    так же можно задать атибут  v-show="условие" который оставляет элемент в дом дереве, делает только его невидимым(display: none)-->
    Список пользователей пуст
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.post {
  padding: 15px;
  border: 2px solid tomato;
}
.user-list-item{
  display: inline-block;
  margin-right: 10px;
}

.user-list-enter-active,
.user-list-leave-active{
  transition: all 0.5s ease;
}

.user-list-enter-form,
.user-list-leave-to{
  opacity: 0;
  transform: translateY(130px);
}

.user-list-move{
  transition: transform 0.5s ease;
}

</style>