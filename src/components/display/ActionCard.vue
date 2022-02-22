<template>
  <v-card :href="action.link" target="_blank" hover>
    <v-card-title
      ><v-icon large :color="action.color" class="mr-2">
        {{ action.icon }} </v-icon
      >{{ action.text }}</v-card-title
    >
  </v-card>
</template>

<script>
export default {
  name: "ActionCard",
  props: {
    action: Object,
  },
};
</script>

<style></style>
