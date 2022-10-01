<template>
    <header>
        <nav class="navigation">
            <router-link to="/" class="router-link logo">Web3.0 App</router-link>
            <ul class="links">
                <li><router-link to="/encryption" class="router-link">Encryption</router-link></li>
            </ul>
            <div class="wallet-info">
                <div class="wallet-balance">Balance: {{walletBalance}}</div>
                <div v-if="walletAddres">{{walletAddres[0]}}</div>
            </div>            
            <ConnectWallet v-if="!walletAddres[0]"/>
        </nav>
        <router-view />   
    </header>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import ConnectWallet from './ConnectWallet.vue'

export default defineComponent({
    name: "AppHeader",
    components: { ConnectWallet },    
    computed:{
        ...mapState({
            walletAddres: 'walletAddres',
            walletBalance: 'walletBalance'
        })
    },
})
</script>

<style lang="css" scoped>
    .navigation{
        display: flex;
        align-items: center;   
        background-color: transparent;
        height: 60px;
        width:100%;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        color: black;        
    }
    a{
        color: black;
    }
    a:visited{
        color:black;
    }
    .logo{
        font-size: 24px;  
        margin-left: 24px;      
    }
    .links li{
        margin-left: 24px;
    }
    .links{
        display:flex;
        align-items: center;
        text-decoration: none;
        list-style-type: none;
        flex-grow: 1;
    }
    .router-link{
        text-decoration: none;
        font-size: 24px;
    }
    .space{
        margin-top: 100px;
    }
    .wallet-info{
        margin-right: 24px;
        display: flex;
        font-size: 24px;
    }
    .wallet-balance{
        margin-right: 24px;        
    }
</style>