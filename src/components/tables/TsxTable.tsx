import { TableProps } from './table'

export default ({ tableData, columns }: TableProps) => (
  <el-table data={tableData}>
    {columns.map((column) => (
      <el-table-column {...column}></el-table-column>
    ))}
  </el-table>
)
