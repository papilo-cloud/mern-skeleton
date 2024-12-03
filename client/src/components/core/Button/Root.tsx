import clsx from "clsx"
import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {
  open: boolean
  // className: classN
}

const Root = ({open, children, className, ...props}: ButtonProps) => {
  return (
    <button 
      className={clsx('bg-primary py-2 px-4 border-0 rounded', className)} 
      {...props}>
        {children}
    </button>
  )
}

export default Root