<script setup>
// http://day.js.org/en/
import dayjs from 'dayjs';

const d1 = '2021/12/25';
const d2 = '2021/12/26';

const df1 = dayjs(d1).format('YYYY-MM-DD');
const df2 = dayjs(d2).format('YYYY-MM-DD');
</script>

<template>
  <fieldset>
    <legend>DayjsDemo</legend>
    <ul>
      <li>{{ df1 }}</li>
      <li>{{ df2 }}</li>
    </ul>
  </fieldset>
</template>

<style scoped></style>
