<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <h1>Welcome to Blockchain Cuties Universe Onboarding!</h1>
      <v-col>
        <v-card>
          <v-row justify="center">
            <v-col cols="7">
              <v-card-text>
                <p class="text-h5 font-weight-bold">
                  My name is Kote, and I will be your guide.
                </p>
                <p>Today we will:</p>
                <ul>
                  <li>pick a blockchain to play on</li>
                  <li>create your game profile</li>
                  <li>start your Cutie collection</li>
                </ul>
              </v-card-text>
            </v-col>
            <v-col cols="3">
              <v-img class="float-end" src="/pictures/kote.png" contain></v-img>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-row justify="center" class="pa-5">
              <v-btn outlined color="primary" to="/journey">
                Get started
              </v-btn>
            </v-row>
          </v-card-actions></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WelcomeCard",

  data: () => ({}),
};
</script>
