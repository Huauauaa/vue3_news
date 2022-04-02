<script>
import { h, reactive, computed } from 'vue';
import { ElPagination, ElTable, ElTableColumn } from 'element-plus';

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    header: {
      type: Object,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    headerPagination: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({ page: 1 });

    const tableData = computed(() => {
      if (props.headerPagination) {
        return props.data;
      }
      return props.data.slice(
        (state.page - 1) * props.pageSize,
        state.page * props.pageSize,
      );
    });
    const columns = computed(() =>
      props.header.header.map((item) => h(ElTableColumn, { ...item })),
    );

    const onPageChange = (page) => {
      state.page = page;
    };
    return () => {
      const result = [h(ElTable, { data: tableData.value }, columns.value)];
      if (props.headerPagination) {
        return result;
      }
      result.push(
        h(ElPagination, {
          total: props.data.length,
          pageSize: props.pageSize,
          onCurrentChange: onPageChange,
          layout: 'prev, pager, next',
        }),
      );
      return result;
    };
  },
};
</script>
