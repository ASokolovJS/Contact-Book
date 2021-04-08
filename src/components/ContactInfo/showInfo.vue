<template>
  <li class="listInfo">
    <span> {{ info.title }} : {{ info.body }} </span>
    <button class="del" @click="$emit('delit', info.id)">Удалить</button>
    <button class="edits" v-on:click="show">Ред.</button>
    <div v-show="form" class="editForm">
      <form>
        <input type="text" v-model="info.title" />
        <input type="text" v-model="info.body" />
      </form>
      <button @click="newInfo()" v-on:click="show">Сохранить</button>
      <button @click="cancel">Отменить</button>
    </div>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      form: false,
    };
  },
  methods: {
    ...mapMutations(["editInfo"]),
    newInfo() {
      this.editInfo({
        id: this.info.id,
        title: this.info.title,
        body: this.info.body,
      });
    },
    cancel: function () {
      if (confirm("Отменить редактирование?")) {
        this.form = !this.form;
      }
    },
    show: function () {
      this.form = !this.form;
    },
  },
  computed: mapGetters(["Infos"]),
  props: {
    info: {
      type: Object,
    },
  },
};
</script>

<style>
.listInfo {
  padding: 5px;
}
.editForm {
  margin: 5px;
  padding: 5px;
}
.del {
  display: inline;
  right: 10px;
}
.edits {
  display: inline;
  right: 80px;
}
</style>