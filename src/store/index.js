import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosenPetKind: null,
    chosenBlockchain: null,
    chosenStategy: null,
    currentStep: 1,
    petKinds: [
      { name: "Cat", info: "Luck +4%", value: "cat" },
      { name: "Dog", info: "Defence +2", value: "dog" },
      { name: "Fox", info: "Evasion +4%", value: "fox" },
      { name: "Lizard", info: "Attack +1, Defence +1", value: "lizard" },
      { name: "Bear", info: "Attack +2", value: "bear" },
      { name: "Pig", info: "Luck +2%, Drop Chance +15%", value: "pig" },
      {
        name: "Hedgehog",
        info: "Attack +1%, Drop Chance +15%",
        value: "hedgehog",
      },
      { name: "Rabbit", info: "Luck +2%, Evasion +2%", value: "rabbit" },
    ],
    strategies: [
      {
        name: "basic",
        info: "I want to get a basic pet to explore the game",
        value: "params",
      },
      {
        name: "strong",
        info: "I want the best warrior I can get",
        value: "params1",
      },
      {
        name: "collectible",
        info: "I want a unique collectible pet",
        value: "params2",
      },
      {
        name: "tribute",
        info: "I want a pet inspired by pop culture",
        value: "params3",
      },
      {
        name: "random",
        info: "I don't have anything specific in mind",
        value: "params4",
      },
    ],
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
  },
  mutations: {
    nextStep(state) {
      state.currentStep++;
    },
    updatechosenBlockchain(state, blockchain) {
      state.chosenBlockchain = blockchain;
    },
  },
  actions: {},
  modules: {},
});
