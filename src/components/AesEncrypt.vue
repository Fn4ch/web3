<template>
    <div>
        <div class="encryption">
            <h2>Aes encrypt</h2>
            <textarea placeholder="Enter text to encode" v-model="message" ></textarea>
            <input class="secret" v-model="secretWord" placeholder="Enter the secret word"/>
            <button @click="encode" class="encode-button">Encrtypt</button>
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
            if(this.secretWord.length != 16){
                alert('Length of secret key should be 16 for 128 bits key size')
                return
            }
            if(this.message){            
            this.encoded = CryptoJS.AES.encrypt(JSON.stringify(this.message), this.secretWord ).toString()
            }
            else alert('Textarea is empty')
        }
    }
})
</script>

<style>
    
</style>