import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '~/core/config/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, required, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType = showPassword ? 'text' : type || 'text';

    return (
      <div className='relative  py-2'>
        <input
          type={inputType}
          className={cn(
            'peer h-12 w-full rounded-none border-b border-gray-300 bg-transparent outline-none transition-colors duration-200 focus:border-blue-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <button
            type='button'
            className='absolute inset-y-0 right-0 flex items-center px-2'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOff className='h-5 w-5 text-gray-500' aria-hidden='true' />
            ) : (
              <Eye className='h-5 w-5 text-gray-500' aria-hidden='true' />
            )}
          </button>
        )}
        <label
          htmlFor={label}
          className={twMerge(
            props.value
              ? '-left-0 -translate-y-1/2 text-xs text-blue-500'
              : 'left-0 translate-y-4 text-start  text-gray-400 peer-focus:-left-0 peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-blue-500 ',
            'pointer-events-none absolute  transform  transition-all duration-300   '
          )}
        >
          {label}
          {required && <span className='ml-1 text-red-400'>*</span>}
        </label>
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
