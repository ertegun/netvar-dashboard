<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Anasayfa</router-link> |
      <router-link to="/about">İletişim</router-link>
    </div> -->
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue darken-2">
          <a href="#!" class="brand-logo">
            <img alt="Vue logo" src="./assets/gruparge.png" />
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <router-link to="/">
                <i class="material-icons">home</i>
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <i class="material-icons">contact_mail</i>
              </router-link>
            </li>
            <!-- <li>
              <router-link to="/AdminAppList">
                <i class="material-icons">fact_check</i>
              </router-link>
            </li> -->
            <!-- <li>
              <router-link to="/newCard">
                <i class="material-icons">bookmark_add</i>
              </router-link>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>

    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(50px);
  transform: scale(0);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
/*pe pea pl pla*/
/*0   1   1   0*/
</style>
<script>
import M from "materialize-css";
export default {
  mounted() {
    M.AutoInit();
  },
};
console.log('Uygulama güncelleme/silme sayfası:',location.origin+'/AdminAppList');
console.log('Uygulama ekleme sayfası:',location.origin+'/newCard');

</script>