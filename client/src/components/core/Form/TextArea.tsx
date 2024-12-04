import clsx from 'clsx';
import React from 'react'
export interface TextAreaProps extends React.ComponentProps<'textarea'> {
	error?: any;
}

const TextArea = ({error, className, children, ...props}: TextAreaProps) => {
  return (
    <textarea 
        {...props}
        className={clsx('outline-none focus:outline-none border-b border-[#2d024a]',
            'mb-5 min-h-12 min-w-[300px] placeholder:text-black text-black font-medium ',
             className)}
    />
  )
}

export default TextArea