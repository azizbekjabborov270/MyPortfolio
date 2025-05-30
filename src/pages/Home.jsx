import React from 'react';
import styled, { keyframes } from 'styled-components';
import profilePic from '../assets/me.png'; // Rasmingiz yo‘lini to‘g‘ri qo‘ying

// Silliq suyuqlik effekti uchun animatsiya
const liquidMove = keyframes`
  0% {
    filter: hue-rotate(0deg) saturate(1);
    transform: translate(0, 0) scale(1);
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
  }
  33% {
    filter: hue-rotate(20deg) saturate(1.2);
    transform: translate(3px, -3px) scale(1.05);
    box-shadow: 0 0 25px rgba(236, 72, 153, 0.8);
  }
  66% {
    filter: hue-rotate(-20deg) saturate(0.9);
    transform: translate(-3px, 3px) scale(0.95);
    box-shadow: 0 0 30px rgba(236, 72, 153, 1);
  }
  100% {
    filter: hue-rotate(0deg) saturate(1);
    transform: translate(0, 0) scale(1);
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
  }
`;

// Profil rasmi uchun styled component
const ProfileImage = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  border: 5px solid #ec4899;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(236, 72, 153, 0.7);
  transition: transform 0.6s ease, box-shadow 0.6s ease, filter 0.6s ease;
  cursor: pointer;
  
  &:hover {
    animation: ${liquidMove} 3.5s ease-in-out infinite;
    transform: scale(1.2);
    box-shadow: 0 0 40px 15px rgba(236, 72, 153, 1);
  }
`;

// Asosiy section konteyneri
const Section = styled.section`
   padding-top: 80px;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
   background: linear-gradient(to right #2b2b2b,#1f1f1f);
  color: #eee;
  
  @media(min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 3rem 5rem;
  }
`;

// Matn konteyneri
const TextContainer = styled.div`
  max-width: 600px;
`;

// Yorqin gradientli bosh sarlavha
const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(90deg, #a855f7, #ec4899, #f43f5e);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  user-select: none;
  margin-bottom: 1rem;
`;

// Pastki matn
const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #ddd;
`;

// Ismingizni ajratib ko'rsatish uchun maxsus span
const Highlight = styled.span`
  text-decoration: underline;
  text-decoration-color: #ec4899;
  font-weight: 700;
`;

const Home = () => {
    return (
        <Section>
            <ProfileImage src={profilePic} alt="Profile" />
            <TextContainer>
                <Title>
                    Assalomu alaykum, men — <Highlight>Azizbek </Highlight>
                </Title>
                <Subtitle>
                    Men zamonaviy web texnologiyalar bilan ishlayman va har doim o‘rganishga tayyorman.
                    React, styled-components, va boshqa kuchli vositalar yordamida chiroyli, tez va foydalanuvchi uchun qulay ilovalar yarataman.
                </Subtitle>
            </TextContainer>
        </Section>
    );
};

export default Home;
