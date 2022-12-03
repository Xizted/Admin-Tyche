import { forwardRef, memo, useState } from 'react';
import { Input, InputGroup, InputGroupText, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';

interface InputWithCheckboxProps {
  label: string;
  placeholder: string;
  name: string;
  onChange: any;
  onBlur: any;
  value: string;
  type: InputType;
  ref: any;
}

const InputWithCheckbox = forwardRef(
  (
    {
      label,
      placeholder,
      name,
      onBlur,
      onChange,
      value,
      type,
    }: InputWithCheckboxProps,
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChangeCheckbox = (e: any) => {
      setIsChecked(!isChecked);
      if (isChecked) {
        onChange('');
      }
    };
    return (
      <>
        <Label className='form-label' htmlFor={label.toLocaleLowerCase()}>
          {label}
        </Label>
        <InputGroup className='mb-2'>
          <InputGroupText>
            <input
              type='checkbox'
              id={label.toLocaleLowerCase()}
              checked={isChecked}
              onChange={handleChangeCheckbox}
            />
          </InputGroupText>
          <Input
            type={type}
            placeholder={placeholder}
            name={isChecked ? name : undefined}
            onChange={onChange}
            onBlur={onBlur}
            disabled={!isChecked}
            value={isChecked ? value : ''}
            required={isChecked}
            //@ts-ignore
            ref={ref}
          />
        </InputGroup>
      </>
    );
  }
);

export default memo(InputWithCheckbox);
