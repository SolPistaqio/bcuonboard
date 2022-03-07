<template>
  <v-container>
    <v-row>
      <v-col>
        <LOGO v-if="!isMobile" />
        <LOGOmobile v-else />
      </v-col>
      <v-col>
        <div class="float-right">
          <span v-for="media in sm" :key="media.id">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  x-small
                  icon
                  tile
                  :href="media.url"
                  target="_blank"
                  :class="isMobile ? 'ma-1 mt-2' : 'ma-3'"
                  v-bind="attrs"
                  v-on="on"
                  color="white"
                  ><v-icon medium>{{ media.icon }}</v-icon></v-btn
                >
              </template>
              <span>{{ media.id }}</span>
            </v-tooltip>
          </span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { viewDetector } from "/src/mixins/viewDetector.js";
import LOGO from "../icons/LOGO.vue";
import { mapState } from "vuex";
import LOGOmobile from "../icons/LOGOmobile.vue";

export default {
  components: { LOGO, LOGOmobile },
  computed: mapState(["sm"]),
  mixins: [viewDetector],
};
</script>

<style></style>
