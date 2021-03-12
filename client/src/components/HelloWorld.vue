<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
    <div class="row">
     
     
    </div>
    <p>
      For a guide and recipes on how to configure / this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a href="https://envanter.netvar.ga" target="_blank" rel="noopener"
          >Envanter Takip</a
        >
      </li>
      <li>
        <a href="http://www.flyuperp.com/" target="_blank" rel="noopener"
          >Üretim ERP</a
        >
      </li>
      <li>
        <a href="https://nextcloud.netvar.ga/" target="_blank" rel="noopener"
          >Nextcloud</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <h3>Ecosystem</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
