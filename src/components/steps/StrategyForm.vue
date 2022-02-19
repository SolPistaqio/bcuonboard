<template>
  <v-container class="fill-height">
    <v-card flat>
      <v-card-title> Let’s talk about pet kinds! </v-card-title>
      <v-card-subtitle>Which one sounds best?</v-card-subtitle>
      <v-card-text>
        <v-form>
          <v-radio-group v-model="kind">
            <v-row>
              <v-col cols="6" v-for="pet in petKinds" :key="pet.value">
                <v-radio :value="pet" required>
                  <template v-slot:label>
                    <v-row no-gutters class="align-center">
                      <v-col cols="1" class="pr-n4">
                        <v-img
                          :src="'/pictures/' + pet.value + '.png'"
                          height="40"
                          width="40"
                          aspect-ratio="1"
                          contain
                        ></v-img>
                      </v-col>
                      <v-col cols="9">
                        <span class="font-weight-bold ml-3">{{
                          pet.name
                        }}</span>
                        -
                        {{ pet.info }}
                      </v-col>
                    </v-row>
                  </template>
                </v-radio>
              </v-col>
            </v-row>
          </v-radio-group>
          <div v-if="kind">
            <v-card-title
              >You chose a {{ kind.value }}! {{ goodVibe }} Now, let’s talk
              about your strategy.</v-card-title
            >
            <v-row>
              <v-col cols="6">
                <v-radio-group v-model="strategy">
                  <v-radio
                    v-for="strategy in strategies"
                    :key="strategy.name"
                    :label="strategy.info"
                    :value="strategy.value"
                    required
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="6">
                <v-img
                  src="/pictures/think.png"
                  max-height="300"
                  contain
                ></v-img
              ></v-col>
            </v-row>
          </div>
        </v-form>
      </v-card-text>
      <div v-if="strategy && kind">
        <v-card-actions>
          <v-row justify="center">
            <v-btn class="pa-5"> Pick my first pet </v-btn>
          </v-row>
        </v-card-actions>
        <v-card-subtitle>
          <v-row justify="center" class="pa-3">
            Return to this page to find out what you can do next
          </v-row>
        </v-card-subtitle>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    kind: null,
    strategy: null,
    goodVibe: null,
  }),
  watch: {
    kind: function () {
      this.goodVibe = this.goodVibesGenerator();
    },
  },

  computed: mapState(["petKinds", "strategies"]),
  methods: {
    goodVibesGenerator() {
      const goodVibes = [
        "Nice!",
        "Perfect!",
        "Good choice!",
        "Awesome!",
        "Great!",
        "Delightful!",
        "Terrific!",
        "Wonderful!",
        "Brilliant!",
      ];
      const randomNumber = Math.floor(Math.random() * goodVibes.length);
      return goodVibes[randomNumber];
    },
  },
};
</script>

<style></style>
