import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
const Mobile = () => {
  const {id,desc}=useParams()

  return (
    
      <Wrapper>
        <h1>Hello User</h1>
        <h3>This is the mobile of id {id} and company is : {desc}</h3>
      </Wrapper>
    
    
  )
}
const Wrapper=styled.section`
background-color:grey;
text-align:center;
font-size:2rem;
`;
export default Mobile