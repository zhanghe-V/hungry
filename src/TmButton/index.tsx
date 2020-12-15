import React from 'react'
import './index.less'
import { TmButtonProps } from './tm-button'

export default function TmButton (props: TmButtonProps) {
  const { type, children, className, htmlType } = props
return <button {...props} className={`tm-button ${className} ${type || ''}`} type={htmlType}>{ children }</button>
}