<script setup>
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
console.log({ instance });
const id0 = 1;
const id1 = null;
const id2 = undefined;
const id3 = '';
</script>
<template>
  version: {{ lodash.VERSION }}
  <div v-bind:id="id0"></div>

  <div v-bind:id="id1"></div>

  <div v-bind:id="id2"></div>

  <div v-bind:id="id3"></div>
  <hr />
  <h2>GLOBALS_WHITE_LISTED </h2>

  {{ Infinity }}
  {{ undefined }}
  {{ NaN }}
  {{ isFinite }}
  {{ isNaN }}
  {{ parseFloat }}
  {{ parseInt }}
  {{ decodeURI }}
  {{ decodeURIComponent }}
  {{ encodeURI }}
  {{ encodeURIComponent }}
  {{ Math }}
  {{ Number }}
  {{ Date }}
  {{ Array }}
  {{ Object }}
  {{ Boolean }}
  {{ String }}
  {{ RegExp }}
  {{ Map }}
  {{ Set }}
  {{ JSON }}
  {{ Intl }}
  {{ BigInt }}
</template>
<style scoped></style>
