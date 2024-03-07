<template>
  <select :value="modelValue" @change="changeOption($event.target.value)">
    <option disabled value="">Выбирите из списка</option>
    <option v-for="option in options"
            :key="option.value"
            :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(value) {
      this.$emit('update:modelValue', value);
    }
  }

}
</script>

<style scoped>

</style>