import clsx from "clsx";

export interface TextInputProps extends React.ComponentProps<'input'> {
  labelName?: string
}

const TextField = ({
    labelName,
    className,
    ...props
}: TextInputProps) => {
  return (
    <label className={clsx('flex items-center')}>
      {labelName}
      <input
        {...props}
        className={clsx('outline-none focus:outline-none border-b border-[#2d024a]',
            'min-w-[300px] text-black placeholder:text-black font-medium',
            className
      )} />
    </label>
  )
}

export default TextField