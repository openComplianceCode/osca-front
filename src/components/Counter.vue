<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import _ from "lodash"

   /* ---- 功能一  ref(0) reactive ---- */
    const counter = ref(0)  
    onMounted(() => {
        setInterval(() => {
            counter.value++
        }, 1000)
    });
    function increase() {
         counter.value = _.add(counter.value, 100);
    }
     /* 功能一 */

     /* 功能二 */
     //...
     /* 功能二 */

</script>

<template>
  <v-alert
  type="success"
  > counter: {{ counter }}</v-alert>
  <button @click="increase()">double !</button>
</template>

<style scoped>

</style>