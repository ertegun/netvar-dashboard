<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/gruparge.png"> -->

    <!-- <HelloWorld msg="Welcome to Grup Arge Apps"/> -->
    <div class="row">
      <EnvanterTakip />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import EnvanterTakip from "@/components/EnvanterTakip.vue";

export default {
  name: "Home",
  components: {
    EnvanterTakip,
  },
};
</script>
