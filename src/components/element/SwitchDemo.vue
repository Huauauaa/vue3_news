<script setup>
import { reactive } from 'vue';

const state = reactive({
  status: false,
  visible1: false,
  visible2: false,
  resolve: null,
});
function onClose1() {
  state.visible1 = false;
}
function onCancel1() {
  state.resolve(false);
  onClose1();
}
function onCancel2() {
  state.resolve(false);
  onClose2();
}
function onConfirm1() {
  state.resolve(true);
  onClose1();
}

function onClose2() {
  state.visible2 = false;
}
function onConfirm2() {
  state.resolve(true);
  onClose2();
}

function onBeforeChange() {
  return new Promise((resolve) => {
    state.resolve = resolve;
    if (Date.now() % 2) {
      state.visible1 = true;
    } else {
      state.visible2 = true;
    }
  });
}
</script>

<template>
  <div>
    {{ state.status }}
    <el-switch
      v-model="state.status"
      :before-change="onBeforeChange"
    ></el-switch>
    <el-dialog
      title="1"
      v-model="state.visible1"
      width="300px"
      :before-close="onClose1"
    >
      <template #footer>
        <el-button type="primary" @click="onCancel1">取消</el-button>
        <el-button type="primary" @click="onConfirm1">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog
      title="2"
      v-model="state.visible2"
      width="300px"
      :before-close="onClose2"
    >
      <template #footer>
        <el-button type="primary" @click="onCancel2">取消</el-button>
        <el-button type="primary" @click="onConfirm2">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped></style>
