<template>
    <div>
        <div class="encryption">
            <h2>Aes decrypt</h2>
            <textarea placeholder="Enter encrypted aes message" v-model="message" ></textarea>
            <input class="secret" v-model="secretWord" placeholder="Enter the secret word"/>
            <button @click="decode" class="encode-button">Decrypt</button>
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
            if(this.secretWord.length != 16){
                alert('Length of secret key should be 16 for 128 bits key size')
            }
            if(this.message){
            const bytes = CryptoJS.AES.decrypt(this.message, this.secretWord)
            this.decoded = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
            }
            else alert('Textarea is empty')
        }
    }
})
</script>

<style>
    
</style>