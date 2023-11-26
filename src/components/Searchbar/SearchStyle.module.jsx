import styled from 'styled-components'
import {  Field } from 'formik'
export const Container = styled.div`
display: flex;
justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #e8e8e8;
  box-shadow: 2px 2px 10px #ccc;
`

export  const Input = styled(Field)`
  border-radius: 30px 0 0 30px;
`
export  const Button = styled.button`
      border-radius: 0 30px 30px 0;
`
export  const Error = styled.div`
      background-color:red;
`

