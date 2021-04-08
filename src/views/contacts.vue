<template>
  <div>
    <div>
      <h1 id="title">Контакты</h1>
    </div>
    <hr />
    <contactList />
    <hr />
    <AddContact />
  </div>
</template>

<script>
import contactList from "@/components/ContactList/contactList";
import AddContact from "@/components/ContactList/AddContact";

export default {
  name: "app",
  components: {
    contactList,
    AddContact,
  },
};
</script>

<style scoped>
#title {
  text-align: center;
}
</style>