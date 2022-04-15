<template>
  <div class="card bottom-right">
      <span v-for="(item,i) in items" :key="i">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: ['position', 'items'],
}
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 5px 5px 5px 0;
  box-shadow: 1px 1px 15px 0 rgba(69, 65, 78, 0.08);
  padding: 10px;
  font-family: Arial;
}
.bottom-right {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: purple;
}
</style>