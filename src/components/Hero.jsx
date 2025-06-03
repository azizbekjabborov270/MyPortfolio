import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import me from "../assets/me.png";

// Neon glow animatsiyasi
const neonGlow = keyframes`
  0%, 100% {
    box-shadow:
      0 0 3px #ff99bb,
      0 0 8px #ff0066,
      0 0 16px #ff99bb,
      0 0 24px #ff0066;
  }
  50% {
    box-shadow:
      0 0 5px #ff6699,
      0 0 10px #ff99bb,
      0 0 20px #ff6699,
      0 0 30px #ff99bb;
  }
`;

// Hover uchun suyuqlik effekti
const liquidHover = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px) rotate(2deg); }
`;

// 🔸 Hero umumiy ramkasi
const HeroBorderFrame = styled.div`
  padding: 8px;
  background: linear-gradient(135deg, #ff99bb, #ff0066);
  border-radius: 35px;
  animation: ${neonGlow} 6s ease-in-out infinite;
  filter: drop-shadow(0 0 18px #ff99bb);
  margin: 2rem;
`;

// 🔸 Asosiy quti
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #0a0a0a;
  padding: 4rem 2rem;
  border-radius: 30px;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// 🔸 Rasm qismi
const ImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #ff99bb;
  box-shadow: 0 0 20px #ff99bb, 0 0 40px #ff0066;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0 0 30px #ff99bb, 0 0 60px #ff0066;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

// 🔸 Matn qismi
const TextContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  background: linear-gradient(90deg, #ff6699, #ff99bb);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${neonGlow} 5s ease-in-out infinite;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #ffb3cc;
  max-width: 600px;
  text-shadow: 0 0 6px #ff99bb88;
`;

const NeonButton = styled(motion.a)`
  align-self: flex-start;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  background: transparent;
  color: #ff99bb;
  border: 2px solid #ff99bb;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 0 12px #ff99bb;
  transition: 0.3s;

  &:hover {
    animation: ${liquidHover} 1s ease-in-out infinite;
    background: #ff99bb;
    color: #0a0a0a;
  }
`;

const Hero = () => {
  return (
    <HeroBorderFrame>
      <HeroContainer>
        <ImageWrapper
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          {/* O'ZINGIZNING RASMINI YUKLANG! */}
          <ProfileImage src={me} alt="Azizbek" />
        </ImageWrapper>

        <TextContent>
          <HeroTitle
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            Azizbek Portfolio
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0 }}
          >
            Web interfeyslar, React, animatsiya, dizayn — hammasi mukammallikka intilgan holda!
          </HeroSubtitle>

          <NeonButton
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Loyihalarni ko‘rish
          </NeonButton>
        </TextContent>
      </HeroContainer>
    </HeroBorderFrame>
  );
};

export default Hero;
