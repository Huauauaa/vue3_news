<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';

const time = ref(new Date());

function disabledDate(date) {
  return dayjs(date.getTime()).isBefore(
    dayjs(new Date()).hour(0).minute(0).second(0).millisecond(0),
  );
}

const now = new Date();
console.log(
  dayjs(now)
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .format('YYYY-MM-DDTHH:mm:ss'),
);
</script>

<template>
  <fieldset>
    <legend>Element plus</legend>
    <el-date-picker
      v-model="time"
      :disabledDate="disabledDate"
    ></el-date-picker>
  </fieldset>
</template>

<style scoped></style>
