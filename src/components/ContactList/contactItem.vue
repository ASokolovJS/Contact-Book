<template>
  <li>
    <a href="/info" @click="$emit('info-contact', list.id)">{{ list.title }}</a>
    <button id="delit" @click="$emit('del', list.id)">Del</button>
  </li>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style  scoped>
#delit {
 position: absolute;
 right: 43%;
 
 }
</style>