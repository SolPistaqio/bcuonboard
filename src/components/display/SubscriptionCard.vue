<template>
  <v-row>
    <v-col cols="8">
      <v-text-field
        prepend-inner-icon="mdi-email"
        type="email"
        :rules="emailRules"
        placeholder="email"
        hint="No spam. Unsubscribe at any time."
        persistent-hint
        outlined
        autofocus
      >
      </v-text-field> </v-col
    ><v-col class="pt-5">
      <v-btn>Subcribe</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
  }),
};
</script>

<style></style>
