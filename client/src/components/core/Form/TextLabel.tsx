import clsx from 'clsx'
import React from 'react'

const TextLabel: React.FC<React.ComponentProps<'label'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label className={clsx('flex items-center', className)}
      {...props} >
      {children}
    </label>
  )
}

export default TextLabel