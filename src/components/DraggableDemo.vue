<template>
  <fieldset>
    <legend>draggable demo</legend>
    <div class="wrapper">
      <div class="item">
        <draggable
          class="dragArea list-group"
          :list="list1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          @change="log"
          item-key="name"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </div>
      <div class="item">
        <draggable
          class="dragArea list-group"
          :list="list2"
          group="people"
          @change="log"
          item-key="name"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </fieldset>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  components: {
    draggable,
  },
  data() {
    return {
      list1: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 },
      ],
      list2: [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 1rem;
}

.wrapper .item {
  border: 1px solid #000;
}
</style>
