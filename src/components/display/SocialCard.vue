<template>
  <v-container>
    <v-row class="justify-center">
      <h4>Join Cutieneer community on social media!</h4>
    </v-row>
    <v-row class="justify-center">
      <div v-for="media in sm" :key="media.id">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              tile
              :href="media.url"
              target="_blank"
              :class="isMobile ? 'ma-1 mt-2' : 'ma-3'"
              v-bind="attrs"
              v-on="on"
              ><v-icon large>{{ media.icon }}</v-icon></v-btn
            >
          </template>
          <span>{{ media.id }}</span>
        </v-tooltip>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { viewDetector } from "/src/mixins/viewDetector.js";
import { mapState } from "vuex";
export default {
  name: "SocialCard",
  mixins: [viewDetector],
  computed: mapState(["sm"]),
};
</script>

<style></style>
