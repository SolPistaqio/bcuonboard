<template>
  <v-container class="fill-height">
    <v-card flat>
      <v-card-title> Let’s talk about pet kinds! </v-card-title>
      <v-card-subtitle>Which one sounds best?</v-card-subtitle>
      <v-card-text>
        <v-form>
          <v-radio-group v-model="kind">
            <!-- Desktop layout  -->
            <v-row v-if="!isMobile">
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

            <!-- Mobile layout  -->
            <v-radio
              v-else
              v-for="pet in petKinds"
              :key="pet.value"
              :label="pet.name + ' - ' + pet.name"
              :value="pet"
            >
              <template v-slot:label>
                <v-row class="align-center pr-n5">
                  <v-col cols="3" class="mr-n5">
                    <v-img
                      :src="'/pictures/' + pet.value + '.png'"
                      height="30"
                      width="30"
                      aspect-ratio="1"
                      contain
                    ></v-img>
                  </v-col>
                  <v-col cols="9">
                    <span class="font-weight-bold">{{ pet.name }}</span>
                    -
                    {{ pet.info }}
                  </v-col>
                </v-row>
              </template>
            </v-radio>
          </v-radio-group>
          <v-divider v-if="marketVisited"></v-divider>
          <div v-if="kind || marketVisited">
            <v-card-title
              v-if="kind && !marketVisited"
              style="word-break: normal"
              >You chose a {{ kind.value }}! {{ goodVibe }} Now, let’s talk
              about your strategy.</v-card-title
            >
            <v-row>
              <v-col :cols="isMobile ? '12' : '6'">
                <v-radio-group v-model="strategy">
                  <v-radio
                    v-for="strategy in strategies"
                    :key="strategy.name"
                    :label="marketVisited ? strategy.short : strategy.info"
                    :value="strategy.value"
                    required
                  ></v-radio>
                </v-radio-group>
              </v-col>
              <v-col v-if="!isMobile" cols="6">
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
      <div v-if="(strategy && kind) || marketVisited">
        <!-- Desktop layout  -->
        <v-card-actions>
          <v-row justify="center">
            <v-btn
              v-if="!marketVisited"
              color="primary"
              class="pa-5"
              :href="link"
              target="_blank"
              @click="
                marketVisited = true;
                kind = null;
                strategy = null;
              "
            >
              Buy my first pet
              <v-icon small class="mt-n4 mx-auto"> mdi-open-in-new</v-icon>
            </v-btn>
            <div v-if="marketVisited">
              <v-btn
                class="pa-5 mr-10"
                :href="link"
                target="_blank"
                color="primary"
                :disabled="!kind || !strategy"
                @click="
                  kind = null;
                  strategy = null;
                "
              >
                Buy another pet

                <v-icon small class="mt-n4 mx-auto"> mdi-open-in-new</v-icon>
              </v-btn>

              <v-btn class="pa-5" @click="toFinalStep" color="primary">
                Continue
              </v-btn>
            </div>
          </v-row>
        </v-card-actions>

        <v-card-subtitle v-if="!marketVisited">
          <v-row justify="center" class="pa-3">
            Return to this page to find out what you can do next
          </v-row>
        </v-card-subtitle>
      </div>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="messageTimeout" color="success">
      {{ successText }}

      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { viewDetector } from "/src/mixins/viewDetector.js";

export default {
  mixins: [viewDetector],

  mounted() {
    this.$store.commit("nextStep", 3);
  },
  data: () => ({
    kind: null,
    strategy: null,
    goodVibe: null,
    marketVisited: false,
  }),
  computed: {
    link: function () {
      if (this.strategy && this.kind) {
        switch (this.strategy) {
          case "pets_unique":
            return "https://blockchaincuties.com/pets_unique";
          case "Noble":
            return (
              "https://blockchaincuties.com/pets_sell?kind=" +
              this.kind.name +
              "&blockchain=" +
              this.$store.state.chosenBlockchain +
              "&nobility=Noble&level%5Bmin%5D=5&level%5Bmax%5D=12&page=1&sortBy=AdventureCooldown&orderBy=Asc&auctionType%5B0%5D=Sell&showGroups=true"
            );
          default:
            return (
              "https://blockchaincuties.com/pets_sell?kind=" +
              this.kind.name +
              "&blockchain=" +
              this.$store.state.chosenBlockchain +
              "&level%5Bmin%5D=1&level%5Bmax%5D=12&page=1" +
              this.strategy +
              "&auctionType%5B0%5D=Sell&showGroups=true"
            );
        }
      } else {
        return null;
      }
    },
    ...mapState(["petKinds", "strategies"]),
  },
  watch: {
    kind: function () {
      this.goodVibe = this.goodVibesGenerator();
    },
  },

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

    toFinalStep() {
      this.$store.commit("nextStep", 4);
    },
  },
};
</script>

<style></style>
