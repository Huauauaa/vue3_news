<template>
  <fieldset>
    <legend>App config</legend>
    {{ msg }}
    {{ lodash.VERSION }}
  </fieldset>
</template>

<script>
export default {
  name: 'AppConfig',
  mounted() {
    console.log('_', this._.uid);
  },
};
</script>
