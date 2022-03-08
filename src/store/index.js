import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosenBlockchain: null,
    chosenWallet: null,
    currentStep: 1,

    // data for the app starts here

    steps: [
      {
        name: "Pick your blockchain",
        order: 1,
        path: "/journey/blockchain",
      },
      {
        name: "Set up player profile",
        order: 2,
        path: "/journey/profile",
      },
      {
        name: "Pick your first pet",
        order: 3,
        path: "/journey/strategy",
      },
      {
        name: "Continue mastering BCU",
        order: 4,
        path: "/journey/mastery",
      },
    ],
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
        short: "Basic",
        value: "&sortBy=Price&orderBy=Asc",
      },
      {
        name: "strong",
        info: "I want the best warrior I can get",
        short: "Premium",
        value: "Noble",
      },
      {
        name: "collectible",
        info: "I want a unique collectible pet",
        short: "Unique collectible",
        value: "pets_unique",
      },
      {
        name: "tribute",
        info: "I want a pet inspired by pop culture",
        short: "Pop culture tribute",
        value: "&rarity=Fancy",
      },
      {
        name: "random",
        info: "I don't have anything specific in mind",
        short: "Random",
        value: "&sortBy=AdventureCooldown",
      },
    ],
    blockchains: [
      {
        name: "EOS",
        desktopLink: "https://getwombat.io",
        mobileLink: "https://getwombat.io",
        walletNameDesktop: "Wombat Wallet",
        walletNameMobile: "Wombat Wallet",
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
        walletNameDesktop: "TRON Link Wallet",
        walletNameMobile: "TRON Link Wallet",
        logo: "TRONicon",
        properties: {
          nfts: "190K+",
          nftMarket: 5,
          itemMarket: 5,
          breeding: 3,
          transactions: 5,
        },
      },
      {
        name: "NEO",
        desktopLink: "https://o3.network/#/wallet",
        mobileLink: "https://o3.network/#/wallet",
        logo: "NEOicon",
        walletNameDesktop: "O3 Wallet",
        walletNameMobile: "O3 Wallet",
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
        walletNameDesktop: "Metamask Wallet",
        walletNameMobile: "Trustwallet",
        properties: {
          nfts: "8K+",
          nftMarket: 3,
          itemMarket: 4,
          breeding: 4,
          transactions: 5,
        },
      },
      {
        name: "HECO",
        desktopLink: "https://metamask.io",
        mobileLink: "https://www.huobiwallet.io/en",
        logo: "HECOicon",
        walletNameDesktop: "Metamask Wallet",
        walletNameMobile: "Huobi Wallet",
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
        walletNameDesktop: "Metamask Wallet",
        walletNameMobile: "Metamask Wallet",
        properties: {
          nfts: "130K+",
          nftMarket: 1,
          itemMarket: 1,
          breeding: 1,
          transactions: 1,
        },
      },
    ],
    sm: [
      {
        icon: "mdi-discord",
        id: "Discord",
        url: "https://discord.com/invite/C6KCEU7",
      },
      // {
      //   icon: "mdi-telegram-fill",
      //   id: "Telegram",
      //   url: "https://t.me/blockchaincutiesinfo",
      // },
      {
        icon: "mdi-twitter",
        id: "Twitter",
        url: "https://twitter.com/BlockchainCutie",
      },
      // {
      //   icon: "mdi-size-m",
      //   id: "Medium",
      //   url: "https://medium.com/blockchain-cuties",
      // },
      {
        icon: "mdi-reddit",
        id: "Reddit",
        url: "https://www.reddit.com/user/blockchaincuties/",
      },
      {
        icon: "mdi-facebook",
        id: "Facebook",
        url: "https://www.facebook.com/blockchaincuties/",
      },
      {
        icon: "mdi-wikipedia",
        id: "Wiki",
        url: "https://blockchain-cuties.fandom.com/wiki/Blockchain_Cuties_Wiki",
      },
    ],
  },
  mutations: {
    nextStep(state, step) {
      state.currentStep = step;
    },
    updatechosenBlockchain(state, blockchain) {
      state.chosenBlockchain = blockchain;
    },
    updatechosenWallet(state, wallet) {
      state.chosenWallet = wallet;
    },
  },
  actions: {},
  modules: {},
});
