<template>
    <div>
        <div class="encryption">
            <h2>Aes decrypt</h2>
            <textarea placeholder="Enter text to decode" v-model="message" ></textarea>
            <input class="secret" v-model="secretWord" placeholder="Enter the secret word"/>
            <button @click="decode" class="encode-button"> Закодировать</button>
            <textarea readonly v-model="decoded" ></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CryptoJS from 'crypto-js'

export default defineComponent({
    data(){
        return{
        message: '' as string,
        decoded: '' as string,
        secretWord: '' as string
        }
    },
    methods:{
        decode(){
            if(this.message){
            this.decoded = CryptoJS.AES.decrypt(this.message, this.secretWord).toString()
        }
        alert('Textarea is empty') 
        }
    }
})
</script>

<style>
    
</style>