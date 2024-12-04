import { ComponentProps, ReactNode } from 'react'
import './dialog.css'
import clsx from 'clsx'

interface RootProps extends ComponentProps<'div'> {
  children: ReactNode
  close?: boolean
  closeButton?: boolean
}

const Root = ({close, closeButton, children, className, ...props}: RootProps) => {
  const handleClick = () => {
    alert('clicked')
  }
  return (
    <div className='dialog'>
        <div 
          className={clsx('pointer relative flex flex-col gap-3 bg-white rounded-md p-5 w-[300px] z-10 drop-shadow-lg ', className)}
           {...props} >
            {
              closeButton && (
                <button 
                  onClick={handleClick}
                  className='absolute top-1 right-3 text-[#ff3c3c]'>X
                </button>
              )
            }
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