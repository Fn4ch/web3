<template>
    <div class="container">
        <div class="image-container">
            <img class="docPanelImg" @click="setSelectedSite('https://app.uniswap.org/')" src="../assets/uniswapLogo.png"/>
            <img class="docPanelImg" @click="setSelectedSite('https://app.1inch.io/')" src="../assets/1inchLogo.svg"/>
            <img class="docPanelImg" @click="setSelectedSite('https://bugs.denet.pro/')" src="../assets/denetBugLogo.svg"/>
            <img class="docPanelImg" @click="setSelectedSite('https://revert.finance/')" src="../assets/revertFinanceLogo.jpg"/>
            <img class="docPanelImg" v-for="site in webSites" :key="site.url" :src="site.logo" @click="setSelectedSite(site.url)"/>
                <img class="loadMoreImg"  src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-256.png" 
                    v-if="!isLoaded" @click="loadMoreSites(), isLoaded = true" title="Load more"
                />
        </div>
        <iframe class="frame" v-if="selectedSite" :src="selectedSite" height="700"></iframe>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import json from '../assets/sites.json'

interface IWebSite{
    url: string
    logo: string
}

export default defineComponent({
    data(){
        return{
        selectedSite: '' as string,
        webSites: [] as IWebSite[],
        isLoaded: false
        }
    },
    methods:{
        setSelectedSite(site: string){
            this.selectedSite = site
        },
        loadMoreSites(){
            this.webSites = json as IWebSite[]
        }
    }
    
})
</script>

<style>
    .container{
        display: flex;
        flex-direction: column;
        margin: 0 40px;
        justify-content: center;
    }
    .frame{
        margin: 20px 0;
        border-radius: 6px;
        border: none;
    }
    .docPanelImg{
        width: 20vw;
        height: 20vw;
        min-width: 50px;
        min-height: 50px;
        max-width: 150px;
        max-height: 150px;
        margin: 18px 18px;
    }
    .image-container{
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .loadMoreImg{
        width: 20vw;
        height: 20vw;
        min-width: 50px;
        min-height: 50px;
        max-width: 150px;
        max-height: 150px;
        margin: 18px 18px;
        padding: 24px;
        border-width: 0.5px;
        border-color: lightgray;
        border-style: solid;
    }
</style>