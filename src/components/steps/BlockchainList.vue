<template>
  <v-container class="fill-height">
    <template v-if="userMadeAChoice === false">
      <v-card flat>
        <v-card-title> Pick your blockchain </v-card-title>
        <v-card-subtitle>
          Click on the blockchain and install a wallet to hold your Cuties and
          coins. When ready, return to this page.
        </v-card-subtitle>
        <v-card-actions>
          <v-row justify-space-around no-gutters>
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
        </v-card-actions>
      </v-card>
    </template>
    <template v-else>
      <v-row justify-space-around no-gutters>
        <v-col cols="6">
          <blockchain-card
            :blockchain="chosenBlockchain"
            nonActive
          ></blockchain-card>
        </v-col>
        <v-col cols="6" class="d-flex align-center">
          <v-card flat>
            <v-card-text>
              <h2>Welcome to {{ chosenBlockchain.name }} team!</h2>
              <p>
                You chose to start your journey on
                {{ chosenBlockchain.name }}, but you can add other blockchains
                to your profile at any time.
              </p>

              <v-checkbox
                :label="'I have installed ' + chosenBlockchain.walletName"
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
    </template>
  </v-container>
</template>

<script>
import BlockchainCard from "../display/BlockchainCard.vue";
import { mapState } from "vuex";

export default {
  name: "Blockchains",
  components: {
    BlockchainCard,
  },

  data: () => ({
    chosenBlockchain: {},
    userMadeAChoice: false,
    walletInstalled: false,
  }),
  computed: mapState(["blockchains"]),
  methods: {
    finishBlockchainChioce() {
      this.$store.commit("updatechosenBlockchain", this.chosenBlockchain.name);
      this.$store.commit(
        "updatechosenWallet",
        this.chosenBlockchain.walletName
      );
      this.$store.commit("nextStep");
    },
  },
};
</script>
