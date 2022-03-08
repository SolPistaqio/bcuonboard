<template>
  <v-card
    class="ma-2"
    :hover="nonActive ? false : true"
    rounded
    :href="link"
    :target="nonActive ? undefined : '_blank'"
  >
    <v-card-title>
      <div class="pr-3">
        <component :is="blockchain.logo" />
      </div>
      {{ blockchain.name }}
    </v-card-title>
    <v-card-subtitle>
      {{
        isMobile ? blockchain.walletNameMobile : blockchain.walletNameDesktop
      }}
      <v-icon v-if="!nonActive" small class="mt-n4 mx-auto">
        mdi-open-in-new</v-icon
      >
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text>
      <p>Cutie NFTs on this chain: {{ blockchain.properties.nfts }}</p>

      NFT market size<v-spacer></v-spacer>
      <v-rating
        color="yellow accent-4"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        background-color="grey"
        length="5"
        readonly
        size="18"
        :value="blockchain.properties.nftMarket"
      ></v-rating>

      Item market size<v-spacer></v-spacer>
      <v-rating
        :value="blockchain.properties.itemMarket"
        color="yellow accent-4"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        background-color="grey"
        length="5"
        readonly
        size="18"
      ></v-rating>

      Breeding fees <v-spacer></v-spacer>
      <v-rating
        :value="blockchain.properties.breeding"
        color="yellow accent-4"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        background-color="grey"
        length="5"
        readonly
        size="18"
      ></v-rating>

      Transaction fees<v-spacer></v-spacer>
      <v-rating
        :value="blockchain.properties.transactions"
        color="yellow accent-4"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        background-color="grey"
        length="5"
        readonly
        size="18"
      ></v-rating>
    </v-card-text>
  </v-card>
</template>

<script>
import EOSicon from "/src/components/icons/EOS.vue";
import TRONicon from "/src/components/icons/TRON.vue";
import ETHicon from "/src/components/icons/ETH.vue";
import NEOicon from "/src/components/icons/NEO.vue";
import HECOicon from "/src/components/icons/HECO.vue";
import MATICicon from "/src/components/icons/MATIC.vue";
import { viewDetector } from "/src/mixins/viewDetector.js";

export default {
  mixins: [viewDetector],
  name: "BlockchainCard",
  props: {
    blockchain: Object,
    nonActive: Boolean,
  },
  components: {
    EOSicon,
    TRONicon,
    ETHicon,
    NEOicon,
    HECOicon,
    MATICicon,
  },
  computed: {
    link() {
      if (this.nonActive) {
        return undefined;
      } else if (this.isMobile) {
        return this.blockchain.mobileLink;
      } else {
        return this.blockchain.desktopLink;
      }
    },
  },
};
</script>

<style></style>
