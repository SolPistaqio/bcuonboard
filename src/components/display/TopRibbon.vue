<template>
  <v-container>
    <v-row>
      <v-col>
        <LOGO />
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
                  class="ma-3"
                  v-bind="attrs"
                  v-on="on"
                  color="white"
                  ><v-icon large>{{ media.icon }}</v-icon></v-btn
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
import LOGO from "../icons/LOGO.vue";

import { mapState } from "vuex";

export default {
  components: { LOGO },
  computed: mapState(["sm"]),
};
</script>

<style></style>
