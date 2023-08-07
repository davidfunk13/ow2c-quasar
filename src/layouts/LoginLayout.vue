<template>
  <div></div>

  <q-layout>
    <q-page-container>
      <q-page class="login-page">
        <q-card class="login-card">
          <q-card-section>
            <div class="text-h4">Authorize via Battle.Net</div>
            <AuthButton />
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import authURI from 'src/authURI';
import { ref, defineComponent } from 'vue';
import AuthButton from '../components/AuthButton/AuthButton.vue';

export default defineComponent({
  name: 'LoginLayout',
  methods: {
  },
  setup() {
    return {
      authURI,
    };
  },
  components: {
    AuthButton,
  },
});
</script>

<style>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  max-width: 400px;
  width: 100%;
  padding: 20px;
}
</style>
