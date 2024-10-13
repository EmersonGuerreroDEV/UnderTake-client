import { Label } from './label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue
} from './select';

interface Props {
  label: string;
  children: React.ReactNode;
  value?: { _id: string | number } | any;
  defaultValue?: { _id: string | number } | any;
  onChange: (value: { _id: string | number } | any) => void;
}

const SelectAlt = ({
  label,
  children,
  value,
  onChange,
  defaultValue
}: Props) => {
  return (
    <div className='rounded-full bg-white  text-gray-800'>
      <Label className='text-xs text-blue-500' htmlFor='terms'>
        {label}
      </Label>

      <Select
        onValueChange={(e) => onChange(e)}
        value={value?._id}
        defaultValue={defaultValue}
      >
        <SelectTrigger className='focus-visible:ring-none  text-base  focus:outline-none focus-visible:ring-0'>
          <SelectValue
            className='text-gray-400 opacity-75'
            placeholder={`Seleccione ${label}`}
          />
        </SelectTrigger>
        <SelectContent onChange={() => {}} className='border-none'>
          <SelectGroup onChange={() => {}}>{children}</SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectAlt;
