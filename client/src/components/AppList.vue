<template>
  <li class="collection-item avatar">
    <img v-bind:src="myappinfo.image" alt="" class="circle" />
    <span class="title">{{ myappinfo.name }}</span>
    <p>
      <!-- First Line <br /> -->
      <!-- Second Line {{ id }} -->
      {{ myappinfo.url }}
    </p>
    <a href="#!" class="secondary-content">
      <!-- <router-link v-bind:to="'/editCard/' + id"> -->
      <router-link
        :to="{ name: 'edit-params', params: { myappinfo: myappinfo } }"
      >
        <i class="material-icons">edit</i>
      </router-link>
      <i
        class="material-icons red-text text-darken-2"
        @click="$store.dispatch('deleteMyApp', myappinfo._id)"
      >
        delete_forever
      </i>
    </a>
  </li>
</template>

<script>
export default {
  name: "AppList",
  // props: {
  //   msg: String,
  //   name: String,
  //   url: String,
  //   image: String,
  //   id: String,
  // },
  props: ["myappinfo"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #42b983;
}
</style>
