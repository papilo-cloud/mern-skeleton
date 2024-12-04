import clsx from 'clsx';
import React from 'react'


const HelperText: React.FC<React.ComponentProps<'span'>> = ({
    className,
    children,
    ...props
}) => {
  return (
    <span className={clsx('text-[#ff3c3c] text-lg my-1.5 font-normal', className)}
        {...props}>
        {children}
    </span>
  )
}

export default HelperText