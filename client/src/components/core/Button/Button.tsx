import clsx from "clsx"
import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {
  open?: boolean
}

const Button = ({open, children, className, ...props}: ButtonProps) => {
  return (
    <button 
      className={clsx('flex items-center justify-center gap-2 bg-primary py-2 px-4 border-0 rounded', className)} 
      {...props}>
        {children}
    </button>
  )
}

export default Button