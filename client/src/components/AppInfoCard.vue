<template>
  <div class="col s12 m3">
    <div class="card">
      <div class="card-image">
        <img v-bind:src="myappinfo.image" height="190" />
        <a class="btn-floating halfway-fab waves-effect waves-light red" v-bind:href="myappinfo.url" target="_blank">
          <i class="material-icons">launch</i>
        </a>
      </div>
      <div class="card-content">
        <span class="card-title truncate">{{ myappinfo.name }}</span>
        <p>
          {{ myappinfo.url }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "AppInfoCard",
  props: ['myappinfo'],
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
p {
  color: #42b983;
}
</style>
