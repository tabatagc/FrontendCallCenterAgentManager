import { boot } from 'quasar/wrappers';
import { Quasar } from 'quasar';

export default boot(({ app }) => {
  app.config.globalProperties.$q = Quasar;
});
