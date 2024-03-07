<template>
  <div>
    <form @submit.prevent>
      <my-input
          v-model="posts.title"
          type="text"
          placeholder="Название"
      />
      <my-input
          v-focus
          v-model="posts.body"
          type="text"
          placeholder="Описание"
      />
      <my-button style="margin-top: 20px" @click="createPost">add</my-button>
    </form>
  </div>
</template>

<script>

export default {

  data() {
    return {
      posts: {
        body: "",
        title: "",
      }
    }
  },
  methods: {
    createPost() {
      this.posts.id = Date.now()
      this.$emit('create', this.posts)
      this.posts = {
        body: "",
        title: "",
      }
    }
  },


}
</script>

<style lang="scss" scoped>

</style>