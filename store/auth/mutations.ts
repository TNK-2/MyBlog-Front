import { MutationTree } from 'vuex';
import { AuthState, Auth } from '@/store/types';

const mutations: MutationTree<AuthState> = {
  add: (state, auth: Auth) => {
    state.auth = auth;
  },
  remove: (state, auth: Auth) => {
    state.auth = undefined;
  },
};

export default mutations;