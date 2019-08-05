import { Module } from 'vuex';
import getters  from './getters';
import actions from './actions';
import mutations from './mutations';
import { Entry, EntryState } from '@/store/types';
import { RootState } from '../types';

const state: EntryState = {
  entries: Array<Entry>()
};

export const auth: Module<EntryState, RootState> = {
    state,
    getters,
    actions,
    mutations
};
