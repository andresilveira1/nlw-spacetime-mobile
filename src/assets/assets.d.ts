declare module '*.png'

declare module '*.svg' {
  import React from 'react'
  import { SvgPorps } from 'react-native-svg'
  const content: React.FC<SvgPorps>
  export default content
}
