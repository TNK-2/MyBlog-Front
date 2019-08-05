import { ActionTree } from 'vuex';
import { EntryState, RootState, Auth } from '@/store/types';

const actions: ActionTree<EntryState, RootState> = {
  getAllEntries: async ({ commit }) => {
    console.log("you successfully called action named getAllEntries!!")
  }
};

export default actions;