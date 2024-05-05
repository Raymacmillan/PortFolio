import React, { useRef } from 'react';
import { Container, ContactHeader, Header, Form, Label, Input, SendBtn, MessageBox, ContactText, SubHeading } from "./ContactStyles";
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nsh7g45', 'template_aietpaj', form.current, {
        publicKey: 'tDFbTBdWN43Wy6P82',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container>
      <div>
    <ContactHeader>Contact </ContactHeader>
    <Form ref={form} onSubmit={sendEmail}>
    <div>
      <Label>Name</Label>
      <Input type="text" name="user_name" />
    </div>
    <div>  
      <Label>Email</Label>
      <Input type="email" name="user_email" />
    </div>
    <div>

      <Label>Message</Label>
      <MessageBox name="message" />
      <SendBtn type="submit" value="Send" />
    </div>
    </Form>
    </div>
    <ContactText>
      <Header>Want me to help paint you your dream website? What are you waiting for?</Header>
      <SubHeading>The web is my canvas and i help individuals and companies turn their dreams, ambitions and imaginations into reality. I'm only one call away!</SubHeading>
    </ContactText>
    </Container>
  );
};