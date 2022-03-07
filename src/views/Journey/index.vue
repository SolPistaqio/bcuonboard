<template>
  <v-container class="fill-height justify-center">
    <v-stepper v-model="model" :flat="isMobile">
      <v-stepper-header v-if="!isMobile">
        <v-stepper-step
          v-for="step in steps"
          :key="step.order"
          :complete="model > step.order"
          :step="step.order"
        >
          {{ step.name }}
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items :class="isMobile ? 'mt-n5' : ''">
        <v-stepper-content
          v-for="step in steps"
          :key="step.order"
          :step="step.order"
          :class="isMobile ? 'mt-n7' : ''"
        >
          <router-view></router-view>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { viewDetector } from "/src/mixins/viewDetector.js";

export default {
  name: "Welcome",
  mixins: [viewDetector],
  computed: {
    model() {
      return this.$store.state.currentStep;
    },
    activeStep() {
      return this.steps[this.model - 1];
    },
    ...mapState(["steps"]),
  },

  watch: {
    model: function () {
      this.$router.push(this.activeStep.path);
    },
  },
};
</script>
<style></style>
