import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
    state: () => ({
        leftDrawerOpen: false,
        rightDrawerOpen: false,
    }),
    actions: {
        closeLeftDrawer() {
            this.leftDrawerOpen = false;
        },
        closeRightDrawer() {
            this.rightDrawerOpen = false;
        },
        openLeftDrawer() {
            this.leftDrawerOpen = true;
        },
        openRightDrawer() {
            this.rightDrawerOpen = true;
        },
    },
});
