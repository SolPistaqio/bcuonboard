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
        <v-stepper-content
          v-for="step in steps"
          :key="step.order"
          :step="step.order"
        >
          <component :is="step.component" />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import ProfileSetup from "../components/steps/ProfileSetup.vue";
import BlockchainList from "/src/components/steps/BlockchainList.vue";
import StrategyForm from "/src/components/steps/StrategyForm.vue";
import Subscription from "/src/components/steps/Subscription.vue";
export default {
  name: "Welcome",
  components: {
    BlockchainList,
    StrategyForm,
    ProfileSetup,
    Subscription,
  },

  data: () => ({
    steps: [
      {
        name: " Pick your blockchain",
        order: 1,
        component: "BlockchainList",
      },
      {
        name: "Set up player profile",
        order: 2,
        component: "ProfileSetup",
      },
      {
        name: "Pick your first pet",
        order: 3,
        component: "StrategyForm",
      },
      {
        name: "Continue mastering BCU",
        order: 4,
        component: "Subscription",
      },
    ],
  }),
  computed: {
    model() {
      return this.$store.state.currentStep;
    },
  },
};
</script>
<style></style>
