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
              v-model="myapp.name"
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
              v-model="myapp.url"
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
              v-model="myapp.image"
            />
            <label for="last_name">Uygulama Resim URL</label>
          </div>
        </div>
        <div class="row">
          <div class="col s3"></div>
          <div class="col s6">
            <div class="col s6 m6">
              <!-- <router-link
                to="/AdminAppList"
                tag="button"
                class="waves-effect waves-light btn-small red"
              >
                İptal
              </router-link> -->
            </div>
            <div class="col s6 m6">
              <a class="waves-effect waves-light btn-small" @click="addCard">
                <i class="material-icons left">bookmark_add</i>{{ btnText }}
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "newCard",
  data() {
    return { myapp: {} };
  },
  computed: {
    btnText() {
      return "Kaydet";
    },
  },
  created: function () {},
  methods: {
    addCard() {
      this.$store.dispatch("addMyApp", this.myapp)
      .then(()=>{
        this.$router.push('/')
      })
    },
  },
  mounted() {},
};
</script>