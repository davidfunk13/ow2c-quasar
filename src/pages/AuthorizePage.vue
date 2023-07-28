<template>
  <div class="q-pa-md">
    <q-btn color="primary" @click="showLoading" label="Show Loading" />
  </div>
</template>

<script>
import { useQuasar, QSpinnerGears } from 'quasar';
import { onBeforeUnmount, onMounted } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';

export default {
  name: 'AuthorizePage',
  setup() {
    const router = useRouter();
    const $q = useQuasar();
    let timer;

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    onMounted(async () => {
      // pull code param from url

      const code = new URLSearchParams(window.location.search).get('code');

      if (!code) {
        $q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'red',
          messageColor: 'black',
          backgroundColor: 'yellow',
          message: 'Updated message',
        });

        timer = setTimeout(() => {
          $q.loading.hide();
          timer = void 0;

          router.push('/');
        }, 2000);
      }

      // call api with code
      // abstrict this into a store.action
      api.post(`/login?code=${code}`).then((res) => {
        console.log(res);
      });

      $q.loading.show({
        message: 'Authorizing...',
      });

      // const res = await req;
      // consol/e.log(res);
    });
    return {
      showLoading() {
        // we're gonna turn this into a redirect on success or failure
        timer = setTimeout(() => {
          $q.loading.show({
            spinner: QSpinnerGears,
            spinnerColor: 'red',
            messageColor: 'black',
            backgroundColor: 'yellow',
            message: 'Updated message',
          });

          timer = setTimeout(() => {
            $q.loading.hide();
            timer = void 0;
          }, 2000);
        }, 2000);
      },
    };
  },
};
</script>
