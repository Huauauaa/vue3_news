import { Button } from '@opentiny/vue'
import { useSlots } from 'vue'

export default (props: Partial<typeof Button>) => {
  const slots = useSlots()
  return <tiny-button {...props}> {slots.default?.()}</tiny-button>
}
