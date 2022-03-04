<template>
  <v-app>
    <v-app-bar color="primary" max-height="55">
      <top-ribbon></top-ribbon>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopRibbon from "./components/display/TopRibbon.vue";
export default {
  components: { TopRibbon },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
