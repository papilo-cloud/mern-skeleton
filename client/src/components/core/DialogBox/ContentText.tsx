import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const ContentText: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div 
        className={clsx(' text-[#0000006d]', className)}
        {...props}>
        {children}
    </div>
  )
}

export default ContentText