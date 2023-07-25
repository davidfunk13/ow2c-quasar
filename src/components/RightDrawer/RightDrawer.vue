<template>
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
        <div class="q-pa-md" style="max-width: 350px">
            <q-list bordered separator>
                <q-item clickable v-ripple>
                    <q-item-section>Single line item</q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section>
                        <q-item-label>Item with caption</q-item-label>
                        <q-item-label caption>Caption</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section>
                        <q-item-label overline>OVERLINE</q-item-label>
                        <q-item-label>Item with caption</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'RightDrawer',
    setup() {
        const rightDrawerOpen = ref(false);

        return {
            rightDrawerOpen,
            toggleLeftDrawer() {
                rightDrawerOpen.value = !rightDrawerOpen.value;
            },
        };
    },
});

</script>
