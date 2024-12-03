import clsx from "clsx"
import { ComponentProps, ReactElement, ReactNode } from "react"

interface ContentProps extends ComponentProps<'div'> {
  children: ReactNode
}
const Content = ({children, className, ...props}: ContentProps) => {
  return (
    <div className={clsx(' relative w-full m-0 p-0')} {...props}>
      {children}
    </div>
  )
}

export default Content