import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import Battletag from 'src/types/Battletag';

interface BattletagState {
  battletag: Battletag | null;
}

export const useBattletagStore = defineStore('battletag', {
  state: (): BattletagState => ({
    battletag: null,
  }),
  actions: {
    async login(code: string) {
      const req = api.post(`/login?code=${code}`);

      const res = await req;

      if (res.status !== 200) {
        return this.setBattletag(null);
      }

      return this.setBattletag(res.data);
    },
    setBattletag(battletag: Battletag | null) {
      this.battletag = battletag;
    },
  },
});
