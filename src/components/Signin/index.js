import React from 'react'
import { FormContent, FormInput, FormLabel, FormWrap, Container, Icon, FormH1, FormButton, Form, TextArea, } from './SigninElements'

const SignIn = () => {
    return (
        <>
         <Container>
            <FormWrap>
             <Icon to="/">Kamin</Icon>
             <FormH1>Eine Frage oder gleich ein Termin?</FormH1>
             <FormContent>
              <Form action="#">
               <FormLabel placeholder="Name" >Name</FormLabel>
               <FormInput placeholder="Name" type="text" required />
               <FormLabel htmlfor="Email">E-Mail</FormLabel>
               <FormInput placeholder="Email" type="text" required />
               <FormLabel placeholder="Message">Message</FormLabel>
               <TextArea placeholder="Message" required></TextArea>
               <FormButton type="submit">Senden</FormButton> 
              </Form>  
             </FormContent>
             </FormWrap>   
         </Container>   
        </>
    )
}

export default SignIn
