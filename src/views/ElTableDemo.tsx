import { ElButton, ElMessage } from 'element-plus'
import { Delete, Edit } from '@element-plus/icons-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ElTableDemo',
  setup: (_, props) => {
    const { attrs } = props
    const loading = ref(false)
    const onDelete = () => {
      ElMessage.error('Delete failed')
    }

    const onEdit = () => {
      loading.value = true
      window.setTimeout(() => {
        loading.value = false
        ElMessage.success('Delete Successfully')
      }, 3e3)
    }
    const columns = [
      { prop: 'date', label: 'Date' },
      {
        label: 'Operation',
        formatter: () => (
          <>
            <el-popconfirm
              title="Are you sure to delete this?"
              onConfirm={() => onDelete()}
              v-slots={{
                reference: <el-button link type="danger" icon={Delete}></el-button>,
              }}
            />
            <ElButton onClick={onEdit} link icon={Edit} />
          </>
        ),
      },
    ]
    return () => (
      <>
        <el-table data={attrs.tableData} v-loading={loading.value}>
          {columns.map((column) => (
            <el-table-column {...column}></el-table-column>
          ))}
        </el-table>
      </>
    )
  },
})
