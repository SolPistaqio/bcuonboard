<template>
  <v-app>
    <v-app-bar color="primary" max-height="55">
      <top-ribbon></top-ribbon>
    </v-app-bar>
    <dark-light-switch></dark-light-switch>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DarkLightSwitch from "./components/display/DarkLightSwitch.vue";
import TopRibbon from "./components/display/TopRibbon.vue";
export default {
  components: { TopRibbon, DarkLightSwitch },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
