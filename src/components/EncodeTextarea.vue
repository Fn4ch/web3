<template>
    <div class="encryption">
        <h2>Sha256 encrypt</h2>
        <textarea placeholder="Enter text to encode" v-model="message" ></textarea>
        <button @click="encode" class="encode-button">Encrypt</button>
        <textarea readonly v-model="encoded" ></textarea>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CryptoJs from 'crypto-js'

export default defineComponent({
    data(){
    return{
        encoded: '' as string,
        message: ''
        }
    },
    methods:{
    encode(){
        if(this.message){
        this.encoded = CryptoJs.HmacSHA256(this.message, '1234').toString()
        return
        }
        alert('Textarea is empty')           
    }
    }
})
</script>

<style>      
    .encode-button{
        margin: 24px;
    }
    textarea{
        width: 40%;
        margin: 0 20px;
        min-height: 200px;
        max-height: 200px;
        min-width: 200px;     
        border-color: grey;
        padding: 10px;
        font-size: 18px;
        border-radius: 3px;
    }
</style>
