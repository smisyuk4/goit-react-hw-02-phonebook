import styled from '@emotion/styled';

export const FormWrp = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    border: 3px dashed;
    padding: 10px;
    background-color: white;
`;

export const LabelForm = styled.label`
    margin-bottom: 10px;
    padding: 10px;
    font-size: 18px;
    text-transform: uppercase;
    width: 100%;
`;

export const InputForm = styled.input`
    width: 100%;
    font-size: 18px;
    background-color: #cfdbdb;
    border: none;

    &:focus-visible {
        outline: none;
    }

    &:hover,
    &:focus {
        background-color: #90d4d4;
    }
`;

export const ButtonForm = styled.button`
    padding: 5px;
    text-transform: uppercase;
    background-color: #cfdbdb;
    border: none;

    &:hover,
    &:focus {
        background-color: #90d4d4;
    }
`;
