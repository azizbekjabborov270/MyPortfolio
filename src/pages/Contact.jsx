import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  min-height: 80vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1f1f1f, #2b2b2b);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eee;
  text-align: center;

  @media(min-width: 768px) {
    padding: 6rem 8rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(90deg, #a855f7, #ec4899, #f43f5e);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 1rem;
  background: #333;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 0 10px #ec4899;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  background: #333;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  resize: none;
  min-height: 150px;
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 0 10px #ec4899;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background: #ec4899;
  border: none;
  border-radius: 50px;
  color: #1f1f1f;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);

  &:hover {
    transform: scale(1.05);
    background: #f43f5e;
    box-shadow: 0 0 20px #f43f5e;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <Title>Contact Me</Title>
      <ContactForm onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message..." required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
