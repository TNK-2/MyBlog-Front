import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { auth } from './auth/index';

const store: StoreOptions<RootState> = {
    state: {
      version: '1.0.0' // a simple property
    },
    modules: {
      auth
    }
};

export default new Vuex.Store<RootState>(store);