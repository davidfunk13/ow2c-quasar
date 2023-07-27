import { defineStore } from 'pinia';
import Battletag from 'src/types/Battletag';

interface BattletagState {
    battletag: Battletag | null;
}

export const useBattletagStore = defineStore('battletag', {
    state: (): BattletagState => ({
        battletag: null,
    }),
    actions: {
        setBattletag(battletag: Battletag | null) {
            this.battletag = battletag;
        },
    },
});
