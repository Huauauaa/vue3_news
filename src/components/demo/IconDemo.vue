<script setup>
import IconAccessibility from '~icons/carbon/accessibility';
import IconAccountBox from '~icons/mdi/account-box';
import IconLike from '~icons/my-icons/like';
import IconOrg from '~icons/my-icons/org';
import IconSite from '~icons/my-yet-other-icons/site';
</script>

<template>
  <fieldset>
    <legend>IconDemo</legend>
    <icon-accessibility />
    <icon-account-box style="font-size: 2em; color: red" />
    <IconLike />
    <el-icon>
      <IconOrg />
    </el-icon>
    <IconSite />
    <icon-site style="color: red; fill: red" />
  </fieldset>
</template>

<style scoped>
svg g polyline {
  stroke: red;
}
</style>
