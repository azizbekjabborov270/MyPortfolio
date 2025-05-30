import React from 'react';
import styled, { keyframes } from 'styled-components';
import cvFile from '../assets/Azizbek_CV.pdf'; // CV faylingizni to‘g‘ri joyga qo‘ying

// Suv qimirlatgani kabi animatsiya
const wave = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

// Asosiy konteyner
const AboutSection = styled.section`
  min-height: 80vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1f1f1f, #2b2b2b);
  color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media(min-width: 768px) {
    padding: 6rem 8rem;
    text-align: left;
    align-items: flex-start;
  }
`;

// Bosh sarlavha, gradient bilan va suyuq anim bilan
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(90deg, #a855f7, #ec4899, #f43f5e);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  user-select: none;
  margin-bottom: 2rem;
  display: inline-block;
  animation: ${wave} 2.5s ease-in-out infinite;
`;

// Matn bloklari konteyneri
const TextContainer = styled.div`
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #ddd;
`;

// Maxsus ta'kid uchun span
const Highlight = styled.span`
  color: #ec4899;
  font-weight: 700;
  text-decoration: underline wavy #f43f5e;
`;

// Download tugmasi
const DownloadButton = styled.a`
  display: inline-block;
  margin: 2rem 0;
  padding: 0.75rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ec4899;
  background-color: transparent;
  border: 2px solid #ec4899;
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.7);

  &:hover {
    background-color: #ec4899;
    color: #fff;
    box-shadow: 0 0 20px #f43f5e;
  }
`;

// Ko'nikmalar ro'yxati
const SkillsList = styled.ul`
  margin-top: 2rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  @media(min-width: 768px) {
    justify-content: flex-start;
  }
`;

// Har bir ko'nikma elementi
const SkillItem = styled.li`
  background: #ec4899;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  color: #1f1f1f;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.7);
  cursor: default;
  user-select: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 20px #f43f5e;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Title>About Me</Title>
      <TextContainer>
        <p>
          Assalomu alaykum! Men — <Highlight>Azizbek</Highlight>, zamonaviy web texnologiyalar bo'yicha dasturchiman. <br />
          React, JavaScript, va styled-components kabi kuchli vositalardan foydalanib, foydalanuvchilar uchun tezkor va ajoyib interfeyslar yarataman.
        </p>
        <p>
          Mening maqsadim — doim o‘rganish va o‘z ustimda ishlash orqali web dasturlash sohasida eng yaxshi mutaxassis bo‘lish. Har doim yangi texnologiyalarni sinab ko‘rishga tayyorman va yaratgan loyihalarim orqali haqiqiy qiymat berishga intilaman.
        </p>

        {/* CV download tugmasi */}
        <DownloadButton href={cvFile} download="Azizbek_CV.pdf">
          CV ni yuklab olish
        </DownloadButton>

        <SkillsList>
          <SkillItem>React</SkillItem>
          <SkillItem>JavaScript (ES6+)</SkillItem>
          <SkillItem>Styled-Components</SkillItem>
          <SkillItem>HTML & CSS</SkillItem>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>Git & GitHub</SkillItem>
          <SkillItem>Responsive Design</SkillItem>
          <SkillItem>REST APIs</SkillItem>
        </SkillsList>
      </TextContainer>
    </AboutSection>
  );
};

export default About;
