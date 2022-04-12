<script>
import { h } from 'vue';

export default {
  name: 'TodoList',
  props: ['todos'],
  setup(props, context) {
    return () =>
      h('div', null, [
        ...props.todos.map((item) =>
          h('div', { key: item.id, class: 'todo-item' }, [
            h('input', {
              type: 'checkbox',
              checked: item.checked,
              onChange: (e) => {
                context.emit('change', { ...item, checked: e.target.checked });
              },
            }),
            h('div', item.label),
            h(
              'div',
              {
                class: 'remove-icon',
                onClick: () => {
                  context.emit('remove', item.id);
                },
              },
              'x'
            ),
          ])
        ),
      ]);
  },
};
</script>
