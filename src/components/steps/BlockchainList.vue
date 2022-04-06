<template>
  <v-container justify="center">
    <v-card v-if="userMadeAChoice === false" class="fill-height" flat>
      <v-card-title> Pick your blockchain </v-card-title>
      <v-card-subtitle>
        Click on the blockchain and install a wallet to hold your Cuties and
        coins. When ready, return to this page.
      </v-card-subtitle>
      <v-card-actions>
        <!-- Desktop layout  -->
        <v-row v-if="!isMobile" justify-space-around no-gutters>
          <v-col
            cols="4"
            v-for="blockchain in blockchains"
            v-bind:key="blockchain.name"
            class="flex-wrap"
          >
            <blockchain-card
              :blockchain="blockchain"
              @click.native="
                chosenBlockchain = blockchain;
                userMadeAChoice = true;
              "
            ></blockchain-card>
          </v-col>
        </v-row>
        <!-- Mobile layout  -->
        <v-row v-else>
          <v-carousel hide-delimiters v-model="model">
            <v-carousel-item
              v-for="blockchain in blockchains"
              v-bind:key="blockchain.name"
            >
              <blockchain-card
                :blockchain="blockchain"
                @click.native="
                  chosenBlockchain = blockchain;
                  userMadeAChoice = true;
                "
              ></blockchain-card>
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-card-actions>
    </v-card>

    <v-card v-else class="fill-height" flat>
      <v-row justify-space-around no-gutters>
        <v-col v-if="!isMobile" cols="6">
          <blockchain-card
            :blockchain="chosenBlockchain"
            nonActive
          ></blockchain-card>
        </v-col>
        <v-col :cols="isMobile ? '12' : '6'" class="d-flex align-center">
          <v-card flat>
            <v-card-text>
              <h2>Welcome to {{ chosenBlockchain.name }} team!</h2>
              <p>
                You chose to start your journey on
                {{ chosenBlockchain.name }}, but you can add other blockchains
                to your profile at any time.
              </p>

              <v-checkbox
                :label="
                  isMobile
                    ? 'I have activated ' +
                      chosenBlockchain.name +
                      ' in my BCU wallet'
                    : 'I have installed ' + chosenBlockchain.walletNameDesktop
                "
                v-model="walletInstalled"
              ></v-checkbox>
            </v-card-text>
            <v-card-actions>
              <v-btn
                @click="
                  userMadeAChoice = false;
                  walletInstalled = false;
                "
                class="mr-5 ml-1"
                >Back</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!walletInstalled"
                color="primary"
                @click="finishBlockchainChioce"
                >Continue</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import BlockchainCard from "../display/BlockchainCard.vue";
import { mapState } from "vuex";
import { viewDetector } from "/src/mixins/viewDetector.js";

export default {
  name: "Blockchains",
  components: {
    BlockchainCard,
  },

  data: () => ({
    chosenBlockchain: {},
    userMadeAChoice: false,
    walletInstalled: false,
    model: 0,
  }),
  computed: mapState(["blockchains"]),
  mixins: [viewDetector],
  mounted() {
    this.$store.commit("nextStep", 1);
  },
  methods: {
    finishBlockchainChioce() {
      this.$store.commit("updatechosenBlockchain", this.chosenBlockchain.name);
      if (this.isMobile) {
        this.$store.commit("updatechosenWallet", "BCU wallet");
      } else {
        this.$store.commit(
          "updatechosenWallet",
          this.chosenBlockchain.walletNameDesktop
        );
      }
      if (this.isMobile) {
        {
          this.$store.commit("nextStep", 3);
        }
      } else {
        this.$store.commit("nextStep", 2);
      }
    },
  },
};
</script>
