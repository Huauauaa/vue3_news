import { type TableColumnCtx } from 'element-plus'

export interface TableProps<T = any> {
  tableData: T[]
  columns: Partial<TableColumnCtx<T>>[]
}
