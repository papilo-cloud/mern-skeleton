import clsx from 'clsx';
import React from 'react'
export interface TextAreaProps extends React.ComponentProps<'input'> {
	error?: any;
}

const TextArea = ({className, children, ...props}: TextAreaProps) => {
  return (
    <div 
        {...props}
        className={clsx('outline-none focus:outline-none border-b border-[#2d024a]',
            'mb-5 min-h-12 min-w-[250px] text-black ', className)}>
        {children}
    </div>
  )
}

export default TextArea