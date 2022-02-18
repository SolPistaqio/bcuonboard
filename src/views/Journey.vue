<template>
  <v-container class="fill-height">
    <v-stepper v-model="model">
      <v-stepper-header>
        <v-stepper-step
          v-for="step in steps"
          :key="step.order"
          :complete="model > step.order"
          :step="step.order"
        >
          {{ step.name }}
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <blockchain-list></blockchain-list>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card>
            <v-card-title> Time to set up your player profile! </v-card-title>
            <v-card-actions>
              <v-row justify="center" class="pa-5">
                <v-btn outlined color="primary">Log In</v-btn>
                <v-btn outlined color="primary" @click="model = 4"
                  >Continue</v-btn
                >
              </v-row>
            </v-card-actions>
            <v-card-subtitle>
              Come back to this page to choose your first pet
            </v-card-subtitle>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-row justify="space-around">
            <strategy-form></strategy-form>
          </v-row>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import BlockchainList from "/src/components/steps/BlockchainList.vue";
import StrategyForm from "/src/components/steps/StrategyForm.vue";
export default {
  name: "Welcome",
  components: {
    BlockchainList,
    StrategyForm,
  },

  data: () => ({
    model: 1,
    steps: [
      {
        name: " Pick your blockchain",
        order: 1,
        component: "BlockchainList",
      },
      {
        name: "Set up player profile",
        order: 2,
      },
      {
        name: "Pick your first pet",
        order: 3,
        component: "StrategyForm",
      },
      {
        name: "Continue mastering BCU",
        order: 4,
      },
    ],
  }),
};
</script>
<style></style>
