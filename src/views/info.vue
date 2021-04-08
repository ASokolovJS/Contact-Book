<template>
  <div>
    <h1 class="info">Info about {{ nameItem }}</h1>
    <hr />
    <showInfo
      v-for="info of infos"
      :key="info.id"
      :info="info"
      @delit="delit"
    />
    <addInfo />
    <a href="/">
      <button class="back">Назад</button>
    </a>
    <button class="buttonBack" @click="stepBack">Шаг назад</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import addInfo from "@/components/ContactInfo/addInfo";
import showInfo from "@/components/ContactInfo/showInfo";
export default {
  computed: mapGetters(["infos", "nameItem"]),
  components: {
    addInfo,
    showInfo,
  },
  methods: {
    ...mapMutations(["removeInfo", "showInfo", "showName", 'reserve']),
    stepBack(){
      confirm("Отменить изменения?") ? (this.reserve(), this.showInfo()) : this.showInfo() ;
    },
    delit(id) {
      if (confirm("Удалить?")) {
        this.removeInfo(id);
      }
    },
    show() {
      this.showInfo();
      this.showName();
    },
  },
  beforeMount() {
    this.show();
  },
};
</script>

<style scoped>
.info {
  text-align: center;
}
.back {
  position: absolute;
  right: 5px;
}
.buttonBack{
  position: absolute;
  left: 5px;
}
</style>