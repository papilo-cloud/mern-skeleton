import { ComponentProps, ReactNode } from 'react'
import './dialog.css'
import clsx from 'clsx'

interface RootProps extends ComponentProps<'div'> {
  children: ReactNode
  open: boolean
}

const Root = ({open, children, className, ...props}: RootProps) => {
  return (
    <div className='dialog'>
        <div 
          className={clsx('relative flex flex-col gap-2.5 bg-white rounded-md p-5 w-[300px] z-10 drop-shadow-lg ', className)}
           {...props} >
            <div className='w-full'>{children?.[0 as keyof ReactNode]}</div>
            <div>{children?.[1 as keyof ReactNode]}</div>
            <div className='w-full'>
              {children?.[2 as keyof ReactNode]}
            </div>
        </div>
    </div>
  )
}

export default Root