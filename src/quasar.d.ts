// Extender as propriedades globais do Vue para incluir `$q`
import { Quasar } from 'quasar';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $q: typeof Quasar;
  }
}
