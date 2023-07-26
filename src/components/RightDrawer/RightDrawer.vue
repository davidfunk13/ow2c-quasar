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
import { defineComponent } from 'vue';
import { useUIStore } from 'src/stores/ui-store';
import { storeToRefs } from 'pinia';

const uiStore = useUIStore();
const { rightDrawerOpen } = storeToRefs(uiStore);

export default defineComponent({
    name: 'RightDrawer',
    setup() {
        return {
            rightDrawerOpen,
        };
    },
});

</script>
