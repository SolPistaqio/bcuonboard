<template>
  <v-container>
    <v-snackbar v-model="snackbar" :timeout="errorTimeout" color="error">
      {{ errorText }}

      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <v-row v-if="!subscribed">
      <h3 class="text-bold">
        Subscribe for daily tips to help you along the way!
      </h3>
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- Desktop layout  -->
        <v-row v-if="!isMobile" class="pt-3">
          <v-col cols="8">
            <v-text-field
              prepend-inner-icon="mdi-email"
              v-model="email"
              type="email"
              :rules="emailRules"
              placeholder="email"
              hint="No spam. Unsubscribe at any time."
              persistent-hint
              outlined
              required
            >
            </v-text-field>
          </v-col>
          <v-col cols="4" class="pt-4">
            <v-btn @click="subscribe()" color="primary" large>Subscribe</v-btn>
          </v-col>
        </v-row>
        <!-- Mobile layout  -->
        <v-row v-else class="pt-3" no-gutters>
          <v-col>
            <v-text-field
              prepend-inner-icon="mdi-email"
              v-model="email"
              type="email"
              :rules="emailRules"
              placeholder="email"
              hint="No spam. Unsubscribe at any time."
              persistent-hint
              outlined
              required
            >
            </v-text-field>

            <v-btn @click="subscribe()" color="primary" medium>Subscribe</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-row>
    <v-row v-else>
      <v-col>
        <h3 class="text-bold mb-3">Thank you for subscribing!</h3>
        <p>Check your mailbox to confirm your subscription.</p>
        <p v-if="!isMobile">
          If you can't find the confirmation email, check your junk folder and
          add social@blockchaincuties.com to your contacts.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { viewDetector } from "/src/mixins/viewDetector.js";
export default {
  mixins: [viewDetector],
  data: () => ({
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
      (v) => !!v || "E-mail is required",
    ],
    accessToken: null,
    subscribed: false,
    email: "",
    valid: false,
    snackbar: false,
    errorText: "Sorry. Something went wrong. Please try again later.",
    errorTimeout: 2000,
  }),

  methods: {
    async getAccessToken() {
      if (!this.subscribed) {
        const response = await this.$axios.post(
          "https://api.sendpulse.com/oauth/access_token",
          {
            grant_type: "client_credentials",
            client_id: "5c023390ff07f2c7f7c94dc7c351c061",
            client_secret: "c82491b47153bdc22e18139be7a551aa",
          }
        );
        this.accessToken = response.data.access_token;
      }
    },
    async subscribe() {
      await this.$refs.form.validate();
      if (this.valid) {
        await this.getAccessToken();

        const response = await this.$axios.post(
          "https://api.sendpulse.com/addressbooks/89396936/emails",
          {
            emails: [this.email],
            confirmation: "force",
            sender_email: "social@blockchaincuties.com",
            template_id: "a3e45169-7ae7-4a39-b457-72fd04401f26",
            message_lang: "en",
          },
          { headers: { Authorization: `Bearer ${this.accessToken}` } }
        );

        if (response.data.result) {
          this.subscribed = true;
        } else {
          this.snackbar = true;
        }
      }
    },
  },
};
</script>

<style></style>
