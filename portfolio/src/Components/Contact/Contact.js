import React, { useRef } from 'react';
import { Container, Header, Form, Label, Input, MessageBox } from "./ContactStyles";
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
    <Header>Contact </Header>
    <Form ref={form} onSubmit={sendEmail}>
      <Label>Name</Label>
      <Input type="text" name="user_name" />
      <Label>Email</Label>
      <Input type="email" name="user_email" />
      <Label>Message</Label>
      <MessageBox name="message" />
      <Input type="submit" value="Send" />
    </Form>
    </Container>
  );
};