<template>
    <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
            <q-btn dense flat round icon="menu" @click="leftDrawerOpen ? closeLeftDrawer() : openLeftDrawer()" />

            <q-toolbar-title>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>
                Title
            </q-toolbar-title>

            <q-btn dense flat round icon="menu" @click="rightDrawerOpen ? closeRightDrawer() : openRightDrawer()" />
        </q-toolbar>

        <q-tabs align="left">
            <q-route-tab to="/page1" label="Page One" />
            <q-route-tab to="/page2" label="Page Two" />
            <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>
    </q-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUIStore } from 'src/stores/ui-store';
import { storeToRefs } from 'pinia';

const uiStore = useUIStore();

const {
    closeRightDrawer,
    openRightDrawer,
    closeLeftDrawer,
    openLeftDrawer,
} = uiStore;

const { leftDrawerOpen, rightDrawerOpen } = storeToRefs(uiStore);

export default defineComponent({
    name: 'AppHeader',
    setup() {
        return {
            closeLeftDrawer,
            openLeftDrawer,
            leftDrawerOpen,
            closeRightDrawer,
            openRightDrawer,
            rightDrawerOpen,
        };
    },
});

</script>
