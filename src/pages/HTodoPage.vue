<script setup>
import { reactive } from 'vue';
import TODOList from '../components/todo/TodoList.vue';

let state = reactive({
  todos: [
    { id: 1, label: 'learn vue', checked: true },
    { id: 2, label: 'have lunch' },
  ],
});

function onRemove(id) {
  state.todos = state.todos.filter((item) => item.id !== id);
}
function onChange({ id, checked }) {
  const target = state.todos.find((item) => item.id === id);
  target.checked = checked;
}
</script>
<template>
  {{ state.todos }}
  <TODOList
    :todos="state.todos"
    @remove="onRemove"
    @change.self="onChange"
  ></TODOList>
</template>
<style lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.remove-icon {
  color: red;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
