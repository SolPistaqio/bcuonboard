<template>
  <v-row>
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
        autofocus
      >
      </v-text-field> </v-col
    ><v-col class="pt-5">
      <v-btn @click="subscribe()">Subcribe</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    accessToken: null,
    subscribed: false,
    email: null,
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
      console.log(response);
      if (response.data.result) {
        this.subscribed = true;
      }
    },
  },
};
</script>

<style></style>
