import React, {useState} from 'react'
import { FormContent, Error, FormInput, FormLabel, ThankYou, FormWrap, Container, Icon, FormH1, FormButton, Form, Message, Img, Background } from './SigninElements'
import BgImg from '../../images/bg3.jpg';
import { useForm } from "react-hook-form";


const SignIn = () => {
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    function onSubmit () {
        setIsSubmitted(true);
    };

    const {register, handleSubmit, errors} = useForm();
    const onSubmittwo = data => {
        console.log(data);
        onSubmit();

    };
    return (
        <>
         <Container>
           <Background>
             <Img src={BgImg}/>
            <FormWrap >
             <Icon to="/">Kamin</Icon>
             <FormH1>Eine Frage oder gleich ein Termin?</FormH1>
             <FormContent>
              <Form action="#" onSubmit={handleSubmit(onSubmittwo)} noValidate >
               <FormLabel placeholder="Name" >Name</FormLabel>
               {errors.name && <Error>{errors.name.message}</Error>}
               {errors.name && errors.name.type === "firstChar" && <Error>1. Muss ein Buchstabe sein</Error>}
               <FormInput name="name" type="text" placeholder="*Name" ref={register({
                   required: {value: true, message: "Bitte Namen eintragen"},
                   maxLength: {value:50, message:"max 50 buchstaben"},
                   minLength: {value:2, message:"Mehr als 2 Buchstaben bitte"},
                   pattern: {value: /^[a-z ,.'-]+$/i, message: "Ein Göffel wie alle anderen auch"},
                   validate: { firstChar: value => /^[A-Za-z]/.test(value)},
               })}/>
               <FormLabel htmlfor="Email">E-Mail</FormLabel>
               {errors.subject && <Error>{errors.subject.message}</Error>}
               <FormInput name="subject" type="email" placeholder="*E-mail" ref={register({
                   required: {value: true, message: "E-mail ist notwendig"},
                   pattern: {value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                   message: "Bitte eine Valide E-mail Adresse"},   
               })} />
               <FormLabel placeholder="Message">Message</FormLabel>
               <Message
                    type="text"
                    name="message"
                    placeholder="*Nachricht"
                    height="grande"
                    ref={register({ 
                    required: {value: true, message:"Leer ? ein Angriff?"},
                    minLength: {value:5, message:"Nachricht muss länger als 5 Zeichen lang sein"},
                    maxLength: {value:500, message:"Message must not exceed 500 characters"},
                })}/>
                {errors.message && <Error>{errors.message.message}</Error>}
               {!isSubmitted ?
                <FormButton onSubmit={onSubmit} type="submit">Senden</FormButton> :
                <ThankYou>Vielen Dank!</ThankYou>
                } 
              </Form>
             </FormContent>
             </FormWrap>
             </Background>   
         </Container> 
        </>
    )
}

export default SignIn
