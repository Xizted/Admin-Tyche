import { forwardRef, memo, useState } from 'react';
import { Input, InputGroup, InputGroupText, Label } from 'reactstrap';
import { InputType } from 'reactstrap/types/lib/Input';
import * as Yup from 'yup';

interface InputWithCheckboxProps {
  label: string;
  placeholder: string;
  name: string;
  onChange: any;
  onBlur: any;
  value: string;
  type: InputType;
  ref: any;
  setSchema?: any;
  invalid?: any;
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
      setSchema,
      invalid,
    }: InputWithCheckboxProps,
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChangeCheckbox = (e: any) => {
      setIsChecked(!isChecked);
      if (isChecked) {
        onChange('');
        setSchema((schema: any) => delete schema['name']);
      } else {
        setSchema((schema: any) => ({
          ...schema,
          [name]: Yup.string().required(),
        }));
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
            invalid={!isChecked ? undefined : invalid}
          />
        </InputGroup>
      </>
    );
  }
);

export default memo(InputWithCheckbox);
