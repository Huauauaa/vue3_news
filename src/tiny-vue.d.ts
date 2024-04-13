import * as TinyVue from '@opentiny/vue'

declare module '@opentiny/vue' {
  // export interface TinyButton {
  //   type: 'primary'
  // }

  export const TinyButton: { type: 'primary' }
  export const Button: { type: 'primary' }
}
