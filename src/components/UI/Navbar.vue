<template>
  <div class="navbar">
    <div @click="$router.push('/')">Main</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">
        Посмотреть посты
      </my-button>
      <router-link to="/user">
        <my-button>user</my-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: darksalmon;
  box-shadow: 2px 2px 4px green;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__btns button {
  margin-left: 10px;
}
</style>