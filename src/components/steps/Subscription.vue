<template>
  <v-container class="fill-height">
    <!-- Add back button and wiki link -->
    <v-card flat>
      <v-card-title>
        Congratulations on starting your Cutie collection!
      </v-card-title>
      <v-row>
        <v-col cols="6">
          <v-card-text>
            <p>Here’s what you can do with your first pet/s:</p>
            <v-row>
              <v-col cols="4" v-for="action in actions" :key="action.text">
                <ActionCard :action="action" />
              </v-col>
            </v-row>
            <p class="mt-5">
              Now you have a game account in one of the most advanced
              Play-To-Earn games in the industry.
            </p>
            <p>
              There's still a lot to figure out before you find your strategy.
              And you don't have to do it alone.
            </p>
            <h3 class="text-bold">
              Subscribe for daily tips to help you along the way!
            </h3>

            <v-card-actions>
              <SubscriptionCard />
            </v-card-actions>
          </v-card-text>
        </v-col>
        <v-col cols="6">
          <v-img src="/pictures/final.png" max-height="300" contain></v-img
        ></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-actions>
            <SocialCard />
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import ActionCard from "../display/ActionCard.vue";
import SubscriptionCard from "../display/SubscriptionCard.vue";
import SocialCard from "../display/SocialCard.vue";

export default {
  components: {
    ActionCard,
    SubscriptionCard,
    SocialCard,
  },
  data: () => ({
    actions: [
      {
        link: "https://blockchaincuties.com/adventures/list",
        color: "grey",
        icon: "mdi-fencing",
        text: "Farm",
      },
      {
        link: "https://blockchaincuties.com/pets_breed",
        color: "red",
        icon: "mdi-heart-multiple-outline",
        text: "Breed",
      },
      {
        link: "https://blockchaincuties.com/pets_sell",
        color: "green",
        icon: " mdi-cash-multiple",
        text: "Trade",
      },
    ],
  }),
};
</script>

<style></style>
