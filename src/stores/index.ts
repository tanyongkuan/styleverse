import { store } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import type { Router } from 'vue-router';
import { router } from 'src/router';
import { i18n, MessageLanguages, MessageSchema } from 'boot/i18n';
import { markRaw } from 'vue';
import cloneDeep from 'lodash.clonedeep';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { Composer } from 'vue-i18n';

/*
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router;
    i18n: Composer<{ message: MessageSchema }, [], [], MessageLanguages>;
    // i18n: Composer<I18n<{ message: MessageSchema }, [], [], MessageLanguages, false>>;
  }
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia();

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)
  pinia.use(piniaPluginPersistedstate);
  pinia.use(({ store }) => {
    store.router = markRaw(router);
    store.i18n = i18n.global;

    const initialState = cloneDeep(store.$state);

    store.$reset = () => {
      store.$patch(cloneDeep(initialState));
    };
  });

  return pinia;
});
