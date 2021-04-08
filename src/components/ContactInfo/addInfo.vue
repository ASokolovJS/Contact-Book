<template>
  <form class="name" @submit.prevent="onSubmit">
    <input class="title" type="text" v-model="title" placeholder="Название" />
    <input class="body" type="text" v-model="body" placeholder="Значение" />
    <button class="add" type="submit">Добавить</button>
  </form>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["inx"]),
  data() {
    return {
      id: "",
      title: this.title,
      body: this.body,
    };
  },
  methods: {
    ...mapMutations(["addInfo", "showInfo"]),
    onSubmit() {
      if ((this.title == " ") & (this.body == " ")) {
      } else {
        this.addInfo({
          id: Date.now(),
          title: this.title,
          body: this.body,
        });
        this.title = " ";
        this.body = " ";
        this.showInfo();
      }
    },
  },
};
</script>

<style>
.add {
  margin: 2px;
}
.title,
.body {
  width: 100px;
  margin: 2px;
}
.name {
  margin: 5px;
  padding: 5px;
}
</style>