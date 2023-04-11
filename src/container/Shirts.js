import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
const Shirts = () => {
  const {id,desc}=useParams()
  return (
    <Wrapper>
        <h1>Hello User</h1>
        <the>The company of the shirt is {desc} and id is :{id} </the>
      </Wrapper>
    
    
  )
}
const Wrapper=styled.section`
background-color:grey;
text-align:center;
font-size:2rem;
`;
export default Shirts