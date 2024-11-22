import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
    const { children, className, ...rest } = props;
  return (
    <div className={twMerge('size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl font-medium text-neutral-950', className)} {...rest}>{children}</div>
  )
}

export default Key