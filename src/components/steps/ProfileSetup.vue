<template>
  <v-container class="fill-height">
    <v-card v-if="!loggedIn">
      <v-card-title> Time to set up your player profile! </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <ol>
              <li>Navigate to BCU login page</li>
              <li>Find blockchain you chose on the left</li>
              <li>Click on wallet</li>
              <li>Come back to this page to choose your first pet</li>
            </ol>
            <v-card-actions>
              <v-row justify="center" class="pa-5">
                <v-btn
                  outlined
                  color="primary"
                  href="https://blockchaincuties.com/login"
                  target="_blank"
                  @click="loggedIn = true"
                  >Log In Now</v-btn
                >
              </v-row>
            </v-card-actions>
          </v-col>
          <v-col cols="6">
            <v-img src="/pictures/login.gif" contain></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card v-else flat>
      <v-card-title> Congratulations on setting up your profile! </v-card-title>
      <v-row>
        <v-col>
          <v-card-text>
            <v-checkbox
              label="I have created my player profile"
              v-model="loginConfirmed"
            ></v-checkbox>

            <v-card-actions>
              <v-btn
                outlined
                color="primary"
                @click="
                  loggedIn = false;
                  loginConfirmed = false;
                "
              >
                Back
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                outlined
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loggedIn: false,
    loginConfirmed: false,
  }),
  methods: {
    finishProfileSetup() {
      this.$store.commit("nextStep");
    },
  },
};
</script>

<style></style>
