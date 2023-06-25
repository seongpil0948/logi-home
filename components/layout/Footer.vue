<template>
  <el-footer class="bg-zinc-200 rounded-lg ma-0 align-middle flex items-center justify-center">
    <svg-icon size="24" v-for="icon in icons" :key="icon" class="icon-btn mx-2" type="mdi" :path="icon" />
    <div class="flex-grow"></div>
    <el-select v-model="locale" style="width: 100px">
      <el-option v-for="item in ['ko', 'en']" :key="item" :label="item" :value="item" />
    </el-select>

  </el-footer>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram, } from '@mdi/js'
const icons = [mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram];
const { locale } = useI18n()
</script>
