<template>
  <div class="walletBlock">    
    <button @click="walletConnection">Connect wallet</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { mapActions, mapMutations } from "vuex"
  import Web3 from "web3"

  export default defineComponent({
    methods: {      
      async walletConnection() {      
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')      
      const accounts = await web3.eth.requestAccounts()     
      this.$store.commit('setWalletAddres', accounts)
      this.getWalletBalancePolygon()
      },
      ...mapMutations({
        setWalletAddres: 'setWalletAddres',        
      }),
      ...mapActions({
        getWalletBalancePolygon: 'getWalletBalancePolygon'
      })
    },
    mounted(){
      this.walletConnection()
    }
  })
</script>

<style>
  button {
    margin: 0 24px;
    padding: 12px;
    border-color: grey;
    font-size: 18px;
    border-width: 0.5px;
    border-radius: 3px;
    width: auto;
  }  
</style>
