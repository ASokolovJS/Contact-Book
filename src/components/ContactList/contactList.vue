<template>
  <div id="contactList">
    <ul>
      <contactItem
        v-for="list of lists"
        :key="list.id"
        v-bind:list="list"
        @info-contact="onInfo"
        @del="delit"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import contactItem from "@/components/ContactList/contactItem";

export default {
  computed: mapGetters(["lists"]),
  components: {
    contactItem,
  },
  methods: {
    ...mapMutations(["removeCont", "showCont"]),
    onInfo(id) {
      localStorage.idCont = id
    },
    delit(id) {
      confirm("Удалить?") ? (this.removeCont(id), this.showCont()) : this.showCont();
      },
    show() {
      this.showCont();
    },
  },
  beforeMount() {
    this.show();
  },
};
</script>

<style>
#contactList {
  text-align: left;
}
</style>