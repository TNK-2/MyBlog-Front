import { Module } from 'vuex';
import getters  from './getters';
import actions from './actions';
import mutations from './mutations';
import { AuthState } from '@/store/types';
import { RootState } from '../types';

const state: AuthState = {
  auth: undefined,
};

export const auth: Module<AuthState, RootState> = {
    state,
    getters,
    actions,
    mutations
};
