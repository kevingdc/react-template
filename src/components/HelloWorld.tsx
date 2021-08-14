import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin: auto;
`;

function HelloWorld() {
  return <StyledHeading>Hello World</StyledHeading>;
}

export default HelloWorld;
