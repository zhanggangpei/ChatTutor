import { usePreferredDark } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, watch } from "vue";
import { ref } from "vue";

export type ColorMode = "light" | "dark" | "system";

export const useSettingsStore = defineStore("settings", () => {
  const browserDark = usePreferredDark();
  const baseURL = ref(localStorage.getItem("baseURL") || "");
  const apiKey = ref(localStorage.getItem("apiKey") || "");
  const agentModel = ref(localStorage.getItem("agentModel") || "");
  const titleModel = ref(localStorage.getItem("titleModel") || "");
  const colorMode = ref(
    (localStorage.getItem("colorMode") as ColorMode) || "system"
  );

  const persist = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const saveSettings = () => {
    persist("baseURL", baseURL.value);
    persist("apiKey", apiKey.value);
    persist("agentModel", agentModel.value);
    persist("titleModel", titleModel.value);
    persist("colorMode", colorMode.value);
  };

  watch([baseURL, apiKey, agentModel, titleModel, colorMode], saveSettings);

  const isDarkMode = computed(() => {
    if (colorMode.value === "dark") return true;
    if (colorMode.value === "light") return false;
    return browserDark.value;
  });

  watch(
    isDarkMode,
    (isDark) => {
      document.documentElement.classList.toggle("dark", isDark);
    },
    { immediate: true }
  );

  return {
    baseURL,
    apiKey,
    agentModel,
    titleModel,
    colorMode,
    isDarkMode,
  };
});
