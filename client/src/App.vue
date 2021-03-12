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
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/">Anasayfa</router-link></li>
            <li><router-link to="/about">İletişim</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
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
</style>
