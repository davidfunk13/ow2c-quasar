<template>
  <q-layout view="hHh lpR fFf">
    <AppHeader />
    <LeftDrawer />
    <RightDrawer />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftDrawer from 'components/LeftDrawer/LeftDrawer.vue';
import RightDrawer from 'components/RightDrawer/RightDrawer.vue';
import AppHeader from 'components/AppHeader/AppHeader.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader,
    LeftDrawer,
    RightDrawer,
  },
  setup() {
    return {
    };
  },
});
</script>
