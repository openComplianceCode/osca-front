<template>
  <div class="right-drawer" :class="{ hide: isClosed }">
    <transition name="fade-in" @enter="enter" @leave="leave" appear>
      <div>
        <div class="row-item-right">
          <span style="cursor: pointer" @click="close">
            <v-icon icon="mdi-close"></v-icon>
          </span>
        </div>
        <div v-for="(value, key, i) in result" :key="i" style="padding: 5px">
          <v-alert color="info" :title="key" variant="contained-text">
            <div>
              {{ value }}
            </div>
          </v-alert>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["result", "isClosed"],
  methods: {
    close() {
      this.$emit("updateCloseState",!this.isClosed)
    },
  },
};
</script>

<style scoped>
.right-drawer {
  position: fixed;
  width: 30vw;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 1005;
  background-color: white;
  transition: all 0.3s;
  overflow: scroll;
  padding: 15px;
}
.hide {
  transform: translateX(100%);
}
.row-item-right {
  display: flex;
  flex-direction: row-reverse;
}
</style>
