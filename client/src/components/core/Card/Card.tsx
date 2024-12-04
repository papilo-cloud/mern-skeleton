import clsx from 'clsx'
import React from 'react'

const Card: React.FC<React.ComponentProps<'div'>> = ({
    className,
    children,
    ...props
}) => {
  return (
    <div 
        className={clsx('relative w-full min-h-[80vh] mt-20 p-0', className)}
        {...props}>
        {children}
    </div>
  )
}

export default Card