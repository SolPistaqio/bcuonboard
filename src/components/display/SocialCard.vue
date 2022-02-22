<template>
  <v-container>
    <v-row class="justify-center">
      <h4>Join Cutieneer community on social media!</h4>
    </v-row>
    <v-row class="justify-center">
      <v-btn
        icon
        tile
        v-for="media in sm"
        :key="media.id"
        :href="media.url"
        target="_blank"
        class="ma-3"
        ><v-icon large>{{ media.icon }}</v-icon></v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SocialCard",
  data: () => ({
    sm: [
      {
        icon: "mdi-discord",
        id: "Discord",
        url: "https://discord.com/invite/C6KCEU7",
      },
      {
        icon: "mdi-twitter",
        id: "Twitter",
        url: "https://twitter.com/BlockchainCutie",
      },
      {
        icon: "mdi-size-m",
        id: "Medium",
        url: "https://medium.com/blockchain-cuties",
      },
      {
        icon: "mdi-reddit",
        id: "Reddit",
        url: "https://www.reddit.com/user/blockchaincuties/",
      },
      {
        icon: "mdi-facebook",
        id: "Facebook",
        url: "https://www.facebook.com/blockchaincuties/",
      },
    ],
  }),
};
</script>

<style></style>
