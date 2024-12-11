import clsx from "clsx";
import TextLabel from "./TextLabel";

export interface TextInputProps extends React.ComponentProps<'input'> {
  labelName?: string
}

const TextField = ({
    labelName,
    className,
    ...props
}: TextInputProps) => {
  return (
    <TextLabel>
      {labelName}
      <input
        {...props}
        className={clsx('outline-none focus:outline-none border-b border-[#2d024a]',
            'min-w-[300px] text-black placeholder:text-black font-medium',
            className
      )} />
    </TextLabel>
    // <label className={clsx('')}>
    //   {labelName}
      
    // </label>
  )
}

export default TextField