import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = {
  theme: {
    //dark: false,
    themes: {
      dark: {
        primary: "#4b4c6e",
        secondary: "#607d8b",
        accent: "#9c27b0",
        error: "#f44336",
        warning: "#ff5722",
        info: "#ffeb3b",
        success: "#4caf50",
      },
    },
  },
};

export default new Vuetify(opts);
