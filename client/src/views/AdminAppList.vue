<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/gruparge.png"> -->
    <!-- <HelloWorld msg="Welcome to Grup Arge Apps"/> -->
    <div class="row">
      <div class="col m3"></div>
      <div class="col m6">
        <ul class="collection">
          <AppList
            v-for="app in myApps"
            v-bind:key="app._id"
            :myappinfo="app"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppList from "../components/AppList.vue";
export default {
  name: "AdminAppList",
  components: {
    AppList,
  },
  created: function () {
  },
  methods: {
    // get() {},
  },
  computed: {
    myApps() {
      // veri ilk defa anasayfada vuex ile set ediliyor
      return this.$store.getters.getMyapps;
    },
  },
};
</script>
