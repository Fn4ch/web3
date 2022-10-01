import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

export interface State{
  walletAddres: string[]
  walletBalance: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state:() =>({
    walletAddres: [],
    walletBalance: 0
  }),
  getters: {
  },
  mutations: {
    setWalletAddres(state, walletAddres: string[]){
      state.walletAddres = walletAddres
    },
    setWalletBalance(state, walletBalance: number){
      state.walletBalance = walletBalance
    }
  },
  actions: {},
  modules: {},
})

export function useStore() {
  return baseUseStore(key)
}

