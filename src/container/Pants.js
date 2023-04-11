import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
const Pants = () => {
  const {id,desc}=useParams()
  return (
    <Wrapper>
        <h1>Hello User</h1>
        <h>the company of the pant is {desc} and id is :{id} </h>
      </Wrapper>
    
    
  )
}
const Wrapper=styled.section`
background-color:grey;
text-align:center;
font-size:2rem;
`;
export default Pants