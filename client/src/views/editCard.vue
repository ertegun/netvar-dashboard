<template>
  <div class="about">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="col m3 s12"></div>
          <div class="input-field col m6 s12">
            <input
              id="last_name"
              type="text"
              class="validate"
              v-model="myappinfo.name"
            />
            <label for="last_name">Uygulama Adı</label>
          </div>
        </div>
        <div class="row">
          <div class="col m3 s12"></div>
          <div class="input-field col m6 s12">
            <input
              id="last_name"
              type="text"
              class="validate"
              v-model="myappinfo.url"
            />
            <label for="last_name">Uygulama Adresi </label>
          </div>
        </div>
        <div class="row">
          <div class="col m3 s12"></div>
          <div class="input-field col m6 s12">
            <input
              id="last_name"
              type="text"
              class="validate"
              v-model="myappinfo.image"
            />
            <label for="last_name">Uygulama Resim URL</label>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col s3"></div>
      <div class="col s6">
        <a class="waves-effect waves-light btn-small" @click="updateCard">
          <i class="material-icons left">bookmark_added</i>{{ btnText }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import M from "materialize-css";
export default {
  name: "editCard",
  // components: {
  //   AppList,
  // },
  data() {
    return { myappinfo: [] };
  },
  computed: {
    btnText() {
      return "Kaydet";
    },
  },
  created: function () {
    this.myappinfo = {
      ...this.$route.params.myappinfo,
    };
    setTimeout(() => {
      M.updateTextFields();
    }, 10);
  },
  methods: {
    updateCard() {
      console.log(this.myappinfo);
      this.$store.dispatch("updateMyApp", this.myappinfo).then(() => {
        this.$router.push("/");
      });
    },
  },
  mounted() {},
};
</script>