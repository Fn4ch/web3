<template>
    <div>
        <div class="encryption">
            <h2>Aes encrypt</h2>
            <textarea placeholder="Enter text to encode" v-model="message" ></textarea>
            <input class="secret" v-model="secretWord" placeholder="Enter the secret word"/>
            <button @click="encode" class="encode-button"> Закодировать</button>
            <textarea readonly v-model="encoded" ></textarea>
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
        encoded: '' as string,
        secretWord: '' as string
        }
    },
    methods:{
        encode(){
            if(this.message){
            this.encoded = CryptoJS.AES.encrypt(this.message, this.secretWord).toString()
        }
        alert('Textarea is empty') 
        }
    }
})
</script>

<style>
    
</style>