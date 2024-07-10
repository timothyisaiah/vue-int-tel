import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'VueIntTel',

  setup () {
    return () => h(QBadge, {
      class: 'VueIntTel',
      label: 'VueIntTel'
    })
  }
}
