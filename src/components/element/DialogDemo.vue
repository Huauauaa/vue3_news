<script setup>
const props = defineProps({ visible: { type: Boolean, default: false } });

const emits = defineEmits(['close']);
function onClose() {
  emits('close');
}
</script>

<template>
  <el-dialog title="标题" v-model="props.visible" :before-close="onClose">
    <div>this is a dialog</div>
  </el-dialog>
</template>

<style scoped></style>
