import clsx from 'clsx'
import React from 'react'

const CardContent: React.FC<React.ComponentProps<'div'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx('relative flex flex-col gap-4 w-full justify-center items-center ', className)}
      {...props}>
        {children}
    </div>
  )
}

export default CardContent