import { Error } from '../../../Error/Error';

interface IpInputProps {
  ip: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string | null;
  placeholder?: string;
  disabled?: boolean;
}

export function IpInput ({ ip, disabled = false, onChange, onBlur, error, placeholder = 'Enter IP', ...props }: IpInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }

 return (
   <div className="w-full">
     <input
       className={`
          w-full py-1 px-2
          border rounded border-gray-300
          outline-offset-[-1px] 
          disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
          transition-colors duration-100
          ${error ? 'outline-2 outline-red-500 outline-offset-[-1px] text-red-500' : 'focus:outline-2 focus:outline-sky-500 focus:border-sky-500'}
      `}
       value={ip}
       onChange={handleChange}
       onBlur={onBlur}
       placeholder={placeholder}
       disabled={disabled}
       {...props}
     />
     {error && <Error message={error} />}
   </div>
 )
}
