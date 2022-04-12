// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
const myTheme = {
  primary: "#4CAF50",
  secondary: "#9C27b0",
  accent: "#9C27b0",
  info: "#00CAE3",
};

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme: {
          dark: false,
          colors: myTheme,
        },
      },
    },
  }
);
