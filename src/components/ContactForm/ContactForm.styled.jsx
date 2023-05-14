import styled from '@emotion/styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  position: relative;
  &:focus-within {
    svg {
      transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
      fill: yellowgreen;
    }
  }
`;

export const PersonIcon = styled(BsFillPersonFill)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const PhoneIcon = styled(GiSmartphone)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const Input = styled.input`
  height: 25px;
  width: 88%;
  padding-left: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  outline: none;
  border-radius: 5px;
  &:focus {
    border-color: yellowgreen;
  }
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  background-color: greenyellow;
`;
