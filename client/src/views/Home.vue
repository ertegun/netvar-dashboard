<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/gruparge.png"> -->
    <!-- <HelloWorld msg="Welcome to Grup Arge Apps"/> -->
    <div class="row">
      <app-info-card
        v-for="app in myApps"
        v-bind:key="app._id"
        :myappinfo="app"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppInfoCard from "../components/AppInfoCard.vue";
export default {
  name: "Home",
  components: {
    AppInfoCard,
  },
  created: function () {
    this.$store.dispatch("initMyApps");
  },
  methods: {
    get() {},
  },
  computed: {
    myApps() {
      return this.$store.getters.getMyapps;
    },
  },
};
</script>
