<template>
  <v-container justify="center">
    <v-card class="fill-height">
      <v-card-title class="pa-10">
        <h1 v-if="!isMobile" style="word-break: normal">
          Welcome to Blockchain Cuties Universe Onboarding!
        </h1>
        <div v-else class="font-weight-bold" style="word-break: normal">
          Welcome to BCU Onboarding!
        </div>
      </v-card-title>
      <v-row justify="center">
        <v-col :cols="isMobile ? '6' : '7'">
          <v-card-text>
            <p
              :class="
                isMobile ? 'font-weight-bold' : 'text-h5 font-weight-bold'
              "
            >
              My name is Kote, and I will be your guide.
            </p>

            <div v-if="!isMobile">
              <p>Today we will:</p>
              <ul>
                <li>pick a blockchain to play on</li>
                <li>create your game profile</li>
                <li>start your Cutie collection</li>
              </ul>
            </div>
          </v-card-text>
        </v-col>
        <v-col :cols="isMobile ? '4' : '3'">
          <v-img class="float-end" src="/pictures/kote.png" contain></v-img>
        </v-col>
      </v-row>
      <v-row v-if="isMobile">
        <v-col>
          <v-card-text>
            <p class="text-center">Today we will:</p>
            <ul class="ml-6">
              <li>pick a blockchain to play on</li>
              <li>create your game profile</li>
              <li>start your Cutie collection</li>
            </ul>
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-row justify="center" class="pa-5">
          <v-btn color="primary" to="/journey/blockchain"> Get started </v-btn>
        </v-row>
      </v-card-actions></v-card
    >
  </v-container>
</template>

<script>
import { viewDetector } from "/src/mixins/viewDetector.js";
export default {
  name: "WelcomeCard",

  data: () => ({}),
  mixins: [viewDetector],
};
</script>
