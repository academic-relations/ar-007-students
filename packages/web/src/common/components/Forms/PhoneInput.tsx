/*
--- 사용 방법 (예시) ---
<PhoneInput
  label="전화번호"
  placeholder="010-XXXX-XXXX"
  value={phone}
  handleChange={setPhone}
  setErrorStatus={setErrorPhone}
/>
*/

import React, {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import isPropValid from "@emotion/is-prop-valid";

import { FormProvider, useForm } from "react-hook-form";

import styled, { css } from "styled-components";

import ErrorMessage from "@sparcs-students/web/common/components/Forms/_atomic/ErrorMessage";
import Label from "@sparcs-students/web/common/components/Forms/_atomic/Label";

export interface PhoneInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  placeholder: string;
  value?: string;
  handleChange?: (value: string) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const errorBorderStyle = css`
  border-color: ${({ theme }) => theme.colors.RED[600]};
`;

const disabledStyle = css`
  background-color: ${({ theme }) => theme.colors.GRAY[100]};
  border-color: ${({ theme }) => theme.colors.GRAY[200]};
`;

const Input = styled.input.withConfig({
  shouldForwardProp: prop => isPropValid(prop) && prop !== "hasError",
})<PhoneInputProps & { hasError: boolean }>`
  display: block;
  width: 100%;
  padding: 8px 12px 8px 12px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.GRAY[200]};
  border-radius: 4px;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.FAMILY.PRETENDARD};
  font-size: 16px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fonts.WEIGHT.REGULAR};
  color: ${({ theme }) => theme.colors.BLACK};
  background-color: ${({ theme }) => theme.colors.WHITE};
  &:focus {
    border-color: ${({ theme, hasError, disabled }) =>
      !hasError && !disabled && theme.colors.PRIMARY};
  }
  &:hover:not(:focus) {
    border-color: ${({ theme, hasError, disabled }) =>
      !hasError && !disabled && theme.colors.GRAY[300]};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY[200]};
  }
  ${({ disabled }) => disabled && disabledStyle}
  ${({ hasError }) => hasError && errorBorderStyle}
`;

const InputWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 4px;
`;

// Component
const PhoneInput2: React.FC<
  PhoneInputProps & { setErrorStatus?: (hasError: boolean) => void }
> = ({
  label = "",
  placeholder,
  disabled = false,
  value = "",
  handleChange = () => {}, // setValue
  onChange = undefined, // display results (complicated)
  setErrorStatus = () => {},
  ...props
}) => {
  const formCtx = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });
  const [touched, setTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cursorRef = useRef<number>(0);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(cursorRef.current, cursorRef.current);
    }
  }, [value]);

  useEffect(() => {
    if (touched) {
      const isValidFormat =
        /^(\d{3}-\d{4}-\d{4})$/.test(value) ||
        /^\d*$/.test(value.replace(/-/g, ""));

      if (!value) {
        formCtx.setError("phoneNumber", {
          message: "필수로 채워야 하는 항목입니다",
        });
      } else if (!isValidFormat) {
        formCtx.setError("phoneNumber", {
          message: "숫자만 입력 가능합니다",
        });
      } else if (
        value.replace(/-/g, "").length !== 11 ||
        value.slice(0, 3) !== "010"
      ) {
        formCtx.setError("phoneNumber", {
          message: "유효하지 않은 전화번호입니다",
        });
      } else {
        formCtx.clearErrors("phoneNumber");
      }
      setErrorStatus(!!formCtx.formState.errors.phoneNumber);
    }
  }, [value, touched, formCtx]);

  const handleBlur = () => {
    setTouched(true);
  };

  const formatValue = (nums: string) => {
    const digits = nums.replace(/\D/g, "");
    let formattedInput = "";

    if (digits.length <= 3) {
      formattedInput = digits;
    } else if (digits.length <= 7) {
      formattedInput = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else if (digits.length <= 11) {
      formattedInput = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
    }

    return formattedInput;
  };

  const handlePhoneValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const currentCursor = inputRef.current?.selectionStart || 0;
    const lengthDifference = inputValue.length - formatValue(value).length;
    if (
      lengthDifference > 0 &&
      (currentCursor === 3 ||
        currentCursor === 4 ||
        currentCursor === 8 ||
        currentCursor === 9)
    ) {
      cursorRef.current = currentCursor + 1;
    } else if (
      lengthDifference < 0 &&
      ((currentCursor === 4 && inputValue.length === 4) ||
        (currentCursor === 9 && inputValue.length === 9))
    ) {
      cursorRef.current = currentCursor - 1;
    } else {
      cursorRef.current = currentCursor;
    }
    if (inputValue.length <= 13) handleChange(inputValue);
  };

  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <FormProvider {...formCtx}>
          <Input
            {...formCtx.register("phoneNumber", {
              required: true,
              onBlur: handleBlur,
            })}
            placeholder={placeholder}
            onChange={onChange ?? handlePhoneValueChange}
            disabled={disabled}
            value={formatValue(value)}
            hasError={!!formCtx.formState.errors.phoneNumber}
            ref={inputRef}
            {...props}
          />
          {formCtx.formState.errors.phoneNumber && (
            <ErrorMessage>
              {formCtx.formState.errors.phoneNumber.message}
            </ErrorMessage>
          )}
        </FormProvider>
      </InputWrapper>
    </InputWrapper>
  );
};

export default PhoneInput2;
