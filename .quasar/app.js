/* eslint-disable */
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



import { Quasar } from 'quasar'
import { markRaw } from 'vue'
import AppComponent from 'app/src/App.vue'

import createStore from 'app/src/stores/index'
import createRouter from 'app/src/router/index'




import { defineComponent, h, onMounted, getCurrentInstance } from 'vue'
const RootComponent = defineComponent({
  name: 'AppWrapper',
  setup (props) {
    onMounted(() => {
      

      

      
      const { proxy: { $q } } = getCurrentInstance()
      $q.onSSRHydrated !== void 0 && $q.onSSRHydrated()
      
    })

    return () => h(AppComponent, props)
  }
})




export default async function (createAppFn, quasarUserOptions, ssrContext) {
  // Create the app instance.
  // Here we inject into it the Quasar UI, the router & possibly the store.
  const app = createAppFn(RootComponent)

  

  app.use(Quasar, quasarUserOptions, ssrContext)

  

  
    const store = typeof createStore === 'function'
      ? await createStore({ssrContext})
      : createStore

    
      app.use(store)

      
        // prime the store with server-initialized state.
        // the state is determined during SSR and inlined in the page markup.
        if (typeof window !== 'undefined' && window.__INITIAL_STATE__ !== void 0) {
          store.state.value = window.__INITIAL_STATE__
          // for security reasons, we'll delete this
          delete window.__INITIAL_STATE__
        }
      
    
  

  const router = markRaw(
    typeof createRouter === 'function'
      ? await createRouter({ssrContext,store})
      : createRouter
  )

  
    // make router instance available in store
    
      store.use(({ store }) => { store.router = router })
    
  

  // Expose the app, the router and the store.
  // Note that we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {
    app,
    store,
    router
  }
}
