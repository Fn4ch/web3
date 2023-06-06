<template>
  <div class="eryption-block">
    <div class="button-group">
      <button @click="setSelectedEncryption('sha256')" >Encrypt to sha256</button>
      <button @click="setSelectedEncryption('toAes')" >Encrypt to Aes</button>
      <button @click="setSelectedEncryption('fromAes')" >Decrypt from Aes</button>
    </div>
    <EncodeTextarea v-if="selectedEncryption == 'sha256'"/>
    <AesEncrypt v-if="selectedEncryption == 'toAes'"/>
    <AesDecrypt v-if="selectedEncryption == 'fromAes'"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EncodeTextarea from '../components/EncodeTextarea.vue'
import AesEncrypt from '../components/AesEncrypt.vue'
import AesDecrypt from '../components/AesDecrypt.vue'

export default defineComponent({
  components:{
    EncodeTextarea,
    AesEncrypt,
    AesDecrypt
  },
  data(){
    return{
      selectedEncryption: 'sha256'
    }
  },
  methods:{
    setSelectedEncryption(type: string){
      this.selectedEncryption = type
    }
  }
})

</script>

<style>
  .encryption{
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    margin-top: 40px;
    height: 100%;
    margin-bottom: 40px;
    width: 100%;
  }
  .secret{
    background-color: transparent;
    border-color: gray;
    height: 40px;
    font-size: 18px;
    margin-top: 24px;
    padding: 0 6px;    
    border-width: 0.5px;
    border-radius: 3px;
  }
</style>
