import styled from "styled-components";

const SearchForm = styled.form`
  padding: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const SearchFormBtn = styled.button`
  width: 100px;
  height: 40px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none
  :hover {
  opacity: 1;
};`;

const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 10px;
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export { SearchForm, SearchFormBtn, SearchFormInput };
