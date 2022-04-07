import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export const Wrapper = styled.section`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin: 0.25em;
`

export const Button = styled.button`
  font-size: 1rem;
  border: 2px solid palevioletred;
  padding: 0.5rem 1.5rem;
  margin: 1rem;
  border-radius: 3px;
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
`

export const ColorBoxButton = styled(Button)`
  background: ${props => props.bg};
  color: ${props => props.color};
`

export const HoverDiv = styled.div`
  margin: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.2s ease-out;
  &:hover {
    background: ${props => props.bg};
  }
`

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 3px;
  padding: 0.5rem 0.75rem;
  margin: 1rem;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  line-height: 1;
  &::before {
    content: "◀";
    margin: 0 0.5rem;
  }
`

export const Thing = styled.div`
  color: blue;
  &:hover {
    color: red;
  }
  & ~ & {
    background: tomato;
  }
  & + & {
    background: green;
  }
  &.something {
    background: orange;
  }
  .something-else & {
    border: 1px solid;
  }
`;
