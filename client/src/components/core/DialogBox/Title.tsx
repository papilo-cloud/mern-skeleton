import clsx from "clsx"
import React, { ComponentProps } from "react"

const Title: React.FC<ComponentProps<'p'>> = ({className, children, ...props}) => {
  return (
    <p className={clsx('capitalize tracking-wide font-medium text-lg')}
      {...props}>{children}</p>
  )
}

export default Title