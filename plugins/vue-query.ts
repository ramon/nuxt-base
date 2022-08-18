import { NuxtApp } from "#app";
import {
    dehydrate, hydrate, QueryClient, VueQueryPlugin,
    VueQueryPluginOptions
} from "vue-query";

export default (nuxt: NuxtApp): void => {
  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 } },
  });
  const options: VueQueryPluginOptions = { queryClient };

  nuxt.vueApp.use(VueQueryPlugin, options);

  if (process.server) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.nuxtState["vue-query"] = dehydrate(queryClient);
    });
  }

  if (process.client) {
    nuxt.hooks.hook("app:created", () => {
      hydrate(queryClient, nuxt.nuxtState["vue-query"]);
    });
  }
};
