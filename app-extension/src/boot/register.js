import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-vue-int-tel'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
