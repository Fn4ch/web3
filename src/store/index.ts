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
  actions: {
    async getWalletBalancePolygon({commit}){
      try{ 
      await fetch(`https://api.polygonscan.com/api?module=account&action=balance&address=${this.state.walletAddres[0]}&apikey=76T6AKM3BCAAVKDR7Z4XIM5W2AGIAHNC7Y`)
      .then(res => res.json()).then(res => commit('setWalletBalance', res.result as number))
      }
      catch (e) {
        alert(e)
      }
    }
  },
  modules: {},
})

export function useStore() {
  return baseUseStore(key)
}

