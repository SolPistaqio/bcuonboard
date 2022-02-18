<template>
  <v-form>
    <h2>Let’s talk about pet kinds!</h2>
    <p>Which one sounds best?</p>

    <v-radio-group v-model="kind">
      <v-radio
        v-for="pet in petKinds"
        :key="pet.value"
        :value="pet.value"
        required
      >
        <template v-slot:label>
          <v-row no-gutters class="align-center">
            <v-col cols="2" class="pr-n4">
              <v-img
                :src="'/pictures/' + pet.value + '.png'"
                height="40"
                width="40"
                aspect-ratio="1"
                contain
              ></v-img>
            </v-col>
            <v-col cols="9">
              <span class="font-weight-bold">{{ pet.name }}</span> -
              {{ pet.info }}
            </v-col>
          </v-row>
        </template>
      </v-radio>
    </v-radio-group>

    <!-- <div v-for="pet in petKinds" :key="pet.value">
      <input type="radio" :id="pet.value" :value="pet.value" v-model="kind" />
      <label :for="pet.value"
        ><span class="font-weight-bold">{{ pet.name }}</span> -
        {{ pet.info }}</label
      >
    </div> -->

    <p>You chose a {{ kind }}! Nice!</p>
    <h2>Now, let’s talk strategy!</h2>
    <v-radio-group v-model="strategy">
      <v-radio
        v-for="strategy in strategies"
        :key="strategy.name"
        :label="strategy.info"
        :value="strategy.value"
        required
      ></v-radio>
    </v-radio-group>
    <v-btn class="pa-5" type="submit"> Pick my first pet </v-btn>
  </v-form>
</template>

<script>
// pass blockchain as props or add it to state.
// import { mapState } from "vuex";
export default {
  data: () => ({
    kind: null,
    strategy: null,
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
  }),

  // computed: {
  //   ...mapState(["petKinds"]),
  // },
};
</script>

<style></style>
