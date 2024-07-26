<script setup>
import './assets/css/styles.css'

import { RouterLink, RouterView } from "vue-router";

import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Menu />
  <br>
  <RouterView />
  <!--<Footer/>-->
</template>
