<template>
  <v-container class="fill-height" justify="center">
    <v-card v-if="!loggedIn" flat>
      <v-card-title> Time to set up your player profile! </v-card-title>
      <!-- Desktop layout  -->
      <v-card-text v-if="!isMobile">
        <v-row>
          <v-col cols="6">
            <ol>
              <li>Navigate to BCU login page</li>
              <li>
                Find {{ this.$store.state.chosenBlockchain }} blockchain on the
                left
              </li>
              <li>Click on {{ this.$store.state.chosenWallet }}</li>
              <li>Come back to this page to choose your first pet</li>
            </ol>

            <v-card-actions>
              <v-row class="pa-5">
                <v-btn
                  color="primary"
                  href="https://blockchaincuties.com/login"
                  target="_blank"
                  @click="loggedIn = true"
                  >Log In Now
                  <v-icon small class="mt-n4 mx-auto">
                    mdi-open-in-new</v-icon
                  ></v-btn
                >
              </v-row>
            </v-card-actions>
          </v-col>
          <v-col cols="6">
            <v-img src="/pictures/login.gif" contain></v-img>
          </v-col>
        </v-row>
      </v-card-text>
      <!-- Mobile layout  -->
      <v-card-text v-else>
        1. Paste the link below to your wallet app
        <v-card-actions>
          <v-row>
            <v-col cols="7">
              <v-text-field
                outlined
                disabled
                value="https://blockchaincuties.com/login"
                hint="Link to BCU"
                persistent-hint
                type="text"
                ref="link"
                >https://blockchaincuties.com/login
              </v-text-field>
            </v-col>
            <v-col cols="5">
              <v-btn class="mt-3" @click="copyLink()" color="primary">
                Copy Link</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
        <ol start="2">
          <li>
            Find {{ this.$store.state.chosenBlockchain }} blockchain on the left
          </li>
          <li>Click on {{ this.$store.state.chosenWallet }}</li>
          <li>Come back to this page to choose your first pet</li>
        </ol>

        <v-card-actions>
          <v-btn color="primary" @click="loggedIn = true">Continue</v-btn>
        </v-card-actions>

        <v-img class="pt-4" src="/pictures/login.gif" contain></v-img>
      </v-card-text>
    </v-card>
    <v-card v-else flat>
      <v-card-title style="word-break: normal">
        Congratulations on setting up your profile!
      </v-card-title>
      <v-row>
        <v-col>
          <v-card-text>
            <v-checkbox
              label="I have created my player profile"
              v-model="loginConfirmed"
            ></v-checkbox>

            <v-card-actions>
              <v-btn
                @click="
                  loggedIn = false;
                  loginConfirmed = false;
                "
              >
                Back
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="finishProfileSetup"
                :disabled="!loginConfirmed"
                >Continue</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-col>
        <v-col>
          <v-img src="/pictures/like.png" max-height="300" contain></v-img>
        </v-col>
      </v-row>
    </v-card>
    <v-snackbar v-model="snackbar" timeout="2000" color="success">
      Link copied to clipboard

      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { viewDetector } from "/src/mixins/viewDetector.js";
export default {
  mixins: [viewDetector],
  mounted() {
    this.$store.commit("nextStep", 2);
  },
  data: () => ({
    loggedIn: false,
    loginConfirmed: false,
    snackbar: false,
  }),
  methods: {
    finishProfileSetup() {
      this.$store.commit("nextStep", 3);
    },
    copyLink() {
      let textToCopy = this.$refs.link.$el.querySelector("input");
      textToCopy.select();
      document.execCommand("copy");
      this.snackbar = true;
      this.linkCopied = true;
    },
  },
};
</script>

<style></style>
