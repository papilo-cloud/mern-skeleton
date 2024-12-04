import clsx from 'clsx'
import React from 'react'

export interface FormFieldProps extends React.ComponentProps<'form'> {
	error?: boolean;
}

const FormField = ({className, children, ...props}: FormFieldProps) => {
  return (
    <form className={clsx('relative flex flex-col items-center', className)}
        {...props}>
        {children}
    </form>
  )
}

export default FormField