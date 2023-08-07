<script>
import {
  useQuasar, QSpinnerGears, QSpinnerCube,
} from 'quasar';
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth-store';

export default {
  name: 'AuthorizePage',
  setup() {
    const authStore = useAuthStore();

    const router = useRouter();
    const $q = useQuasar();
    let timer;
    // cleanup the timer and loading plugin
    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    onMounted(async () => {
      // pull code param from url
      const code = new URLSearchParams(window.location.search).get('code');

      // if there's not a code
      if (!code) {
        $q.loading.show({
          spinner: QSpinnerCube,
          spinnerColor: 'red',
          messageColor: 'black',
          backgroundColor: 'red',
          message: 'Login Failed',
        });

        timer = setTimeout(() => {
          router.push('/');
        }, 2000);
        return;
      }

      $q.loading.show({
        message: 'Authorizing...',
      });

      const isAuthenticated = await computed(authStore.login(code));

      if (isAuthenticated) {
        $q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'green',
          messageColor: 'black',
          backgroundColor: 'green',
          message: 'Authorized Successfully',
        });

        timer = setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      }
    });
  },
};
</script>
