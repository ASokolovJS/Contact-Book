<template>
  <form @submit.prevent="onSubmit">
    <input required="true" type="text" v-model="title" />
    <button type="submit">Add</button>
  </form>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["ind"]),
  data() {
    return {
      id: 0,
      title: " ",
      info: [],
    };
  },
  methods: {
    ...mapMutations(["addCont"]),
    onSubmit() {
      if (this.title == " ") {
      } else {
        this.addCont({
          id: Date.now(),
          title: this.title,
          info: this.info
        });
      }
      this.title = " ";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input {
  margin: 3px;
  padding: 2px;
  width: 100%;
}
button {
  margin: 3px;
}
</style>