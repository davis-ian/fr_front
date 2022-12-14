/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// =============================================================================
// COMPONENTS
// =============================================================================
import App from "./App.vue";
import router from "@/router";

// =============================================================================
// COMPOSABLES
// =============================================================================
import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
// =============================================================================
// PLUGINS
// =============================================================================
import { registerPlugins } from "@/plugins";

// =============================================================================
// FONT AWESOME CORE
// =============================================================================
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// =============================================================================
// FONT AWESOME ICONS
// =============================================================================
import {
  faArrowLeft,
  faBreadSlice,
  faBacon,
  faIceCream,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";

// import { fa } from "@fortawesome/free-regular-svg-icons";

library.add(faArrowLeft, faBreadSlice, faBacon, faIceCream, faDrumstickBite);

// =============================================================================
// FONT AWESOME CONFIG
// =============================================================================
app.component("font-awesome-icon", FontAwesomeIcon);

// =============================================================================
// GLOBALS
// =============================================================================
import axios from "axios";
const axiosInstance = axios.create({
  withCredentials: true,
});
app.config.globalProperties.$axios = { ...axiosInstance };

// =============================================================================
// INIT
// =============================================================================
app.use(router);
app.use(pinia);
registerPlugins(app);
app.mount("#app");
