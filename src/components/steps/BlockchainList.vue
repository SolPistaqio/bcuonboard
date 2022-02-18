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
                primary
                >Back</v-btn
              >

              <v-btn :disabled="walletInstalled === false" color="primary"
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

export default {
  name: "Blockchains",
  components: {
    BlockchainCard,
  },

  data: () => ({
    chosenBlockchain: {},
    userMadeAChoice: false,
    walletInstalled: false,
    blockchains: [
      {
        name: "EOS",
        desktopLink: "https://getwombat.io",
        mobileLink: "https://getwombat.io",
        walletName: "Wombat Wallet",
        logo: "EOSicon",
        properties: {
          nfts: "160K+",
          nftMarket: 4,
          itemMarket: 4,
          breeding: 3,
          transactions: 4,
        },
      },
      {
        name: "TRON",
        desktopLink: "https://www.tronlink.org",
        mobileLink: "https://www.tronlink.org",
        walletName: "TRON Link Wallet",
        logo: "TRONicon",
        properties: {
          nfts: "190K+",
          nftMarket: 5,
          itemMarket: 5,
          breeding: 3,
          transactions: 4,
        },
      },
      {
        name: "NEO",
        desktopLink: "https://o3.network/#/wallet",
        mobileLink: "https://o3.network/#/wallet",
        logo: "NEOicon",
        walletName: "O3 Wallet",
        properties: {
          nfts: "20K+",
          nftMarket: 2,
          itemMarket: 3,
          breeding: 4,
          transactions: 4,
        },
      },
      {
        name: "Polygon",
        desktopLink: "https://metamask.io",
        mobileLink: "https://trustwallet.com",
        logo: "MATICicon",
        walletName: "Metamask Wallet",
        properties: {
          nfts: "8K+",
          nftMarket: 3,
          itemMarket: 4,
          breeding: 4,
          transactions: 4,
        },
      },
      {
        name: "HECO",
        desktopLink: "https://metamask.io",
        mobileLink: "https://www.huobiwallet.io/en",
        logo: "HECOicon",
        walletName: "Metamask Wallet",
        properties: {
          nfts: "10K+",
          nftMarket: 1,
          itemMarket: 1,
          breeding: 4,
          transactions: 4,
        },
      },
      {
        name: "Ethereum",
        desktopLink: "https://metamask.io",
        mobileLink: "https://trustwallet.com",
        logo: "ETHicon",
        walletName: "Metamask Wallet",
        properties: {
          nfts: "130K+",
          nftMarket: 1,
          itemMarket: 1,
          breeding: 1,
          transactions: 1,
        },
      },
    ],
  }),
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>
