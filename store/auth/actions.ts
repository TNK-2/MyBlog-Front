import { ActionTree } from 'vuex';
import { AuthState, RootState, Auth } from '@/store/types';

const actions: ActionTree<AuthState, RootState> = {
  checkAuth: async ({ commit }, auth: Auth) => {
  }
};

export default actions;