<script setup>
import { reactive } from 'vue';
import { Delete } from '@element-plus/icons';
import { nanoid } from 'nanoid';
import { ElMessage } from 'element-plus';

const state = reactive({
  loading: false,
  lines: [],
});

class Line {
  constructor() {
    this.id = nanoid();
    this.text = '';
    this.message = '';
    this.loading = false;
  }
}

function onDeleteLine(id) {
  state.lines = state.lines.filter((item) => item.id !== id);
}

function onAddLine() {
  state.lines.push(new Line());
}

async function onTest(line) {
  try {
    line.loading = true;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 2e3);
    });
    ElMessage.success(line.text);
  } catch (error) {
    console.error(error);
  } finally {
    line.loading = false;
  }
}

function onDeleteAll() {
  state.lines = 0;
}

function onInput(line) {
  if (line.text === '' || /^\d+$/.test(line.text)) {
    line.message = '';
  } else {
    line.message = '只能是数字';
  }
}
</script>

<template>
  <fieldset v-loading="state.loading">
    <legend>add/remove line</legend>
    <el-button-group size="mini">
      <el-button type="primary" @click="onAddLine">添加</el-button>
      <el-button type="danger" @click="onDeleteAll">清空</el-button>
    </el-button-group>

    <pre>
      {{ state.lines }}
    </pre>

    <div v-for="line in state.lines" :key="line.id" v-loading="line.loading">
      <el-input
        v-model="line.text"
        placeholder="some text..."
        @input="() => onInput(line)"
      >
        <template #suffix>
          <el-link
            :underline="false"
            @click="() => onTest(line)"
            type="success"
            :disabled="!line.text || line.message !== ''"
            >测试连接
          </el-link>
          <Delete @click="() => onDeleteLine(line.id)" />
        </template>
      </el-input>
      <el-alert
        v-if="line.message"
        :title="line.message"
        type="error"
        :closable="false"
      >
      </el-alert>
    </div>
  </fieldset>
</template>

<style scoped lang="scss">
.el-input {
  margin: 5px 0;
}
:deep .el-input__suffix-inner {
  gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  svg {
    cursor: pointer;
    &:first-of-type {
      color: green;
    }
    &:last-of-type {
      color: red;
    }
  }
}
</style>
