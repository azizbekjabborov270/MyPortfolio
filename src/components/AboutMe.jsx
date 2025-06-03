// AboutMe.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import me from "../assets/me.png"; // Rasm faylingiz joylashgan yo‘lni shu yerga yozing
// --- NEON EFFECT ---
const neonText = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px #00f6ff, 0 0 10px #00c2ff, 0 0 20px #00aaff, 0 0 40px #0088ff;
  }
  50% {
    text-shadow: 0 0 8px #00ffe5, 0 0 16px #00ffcc, 0 0 32px #00ffaa, 0 0 48px #00ff88;
  }
`;

// --- STYLES ---
const AboutSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(to bottom, #060606, #111111);
  color: #ff99bb;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  color: #ff99bb;
  animation: ${neonText} 4s ease-in-out infinite;
  margin-bottom: 3rem;
`;

const Avatar = styled(motion.img)`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 4px solid #ff99bb;
  object-fit: cover;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px #ff99bb;
`;

const Content = styled(motion.div)`
  max-width: 1000px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ccc;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  z-index: 10;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


const Card = styled(motion.div)`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 15px #ff99bb;
  border: 1px solid #ff99bb;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 0 25px #ff99bb;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff99bb;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #aaa;
`;

// --- COMPONENT ---
const AboutMe = () => {
    return (
        <AboutSection>
            <SectionTitle
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Men Haqimda
            </SectionTitle>

            <Avatar
                src={me } // Rasm faylingiz joylashgan yo‘lni shu yerga yozing
                alt="Azizbek"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            />

            <Content
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                Salom! Men Azizbek, tajribali va har doim mukammallikka intiladigan frontend dasturchiman.
                React, JavaScript, styled-components va boshqa zamonaviy texnologiyalar bilan ishlashni juda yaxshi ko‘raman.
                Mening har bir loyihamda estetik go‘zallik, animatsion joziba va texnik mukammallik ustunlik qiladi.
                Men uchun kod — bu san’at. Har bir komponent, har bir effekt — bu ilhomdan tug‘ilgan.
            </Content>

            <CardGrid>
                <Card
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <CardTitle>Tajriba</CardTitle>
                    <CardText>
                        React, Styled-Components, Framer Motion, Bootstrap, Sass va boshqa texnologiyalarda mukammal tajribaga egaman.
                    </CardText>
                </Card>

                <Card
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <CardTitle>Fikr</CardTitle>
                    <CardText>
                        Dasturlash — bu ijod. Har bir piksel, har bir animatsiya maqsadli va nafis bo‘lishi kerak deb hisoblayman.
                    </CardText>
                </Card>

                <Card
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <CardTitle>Maqsad</CardTitle>
                    <CardText>
                        Har bir yaratganim "wow" effektli bo‘lishini istayman. Foydalanuvchini hayratga soladigan interfeyslar yaratish mening ustuvor yo‘nalishim.
                    </CardText>
                </Card>

                <Card
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <CardTitle>Shaxsiy</CardTitle>
                    <CardText>
                        Men san’at, dizayn va musiqani yaxshi ko‘raman. Bo‘sh vaqtlarimda kod yozishdan tashqari, yangi texnologiyalarni o‘rganishni xush ko‘raman.
                    </CardText>
                </Card>

                <Card
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <CardTitle>Yondashuvim</CardTitle>
                    <CardText>
                        Har bir dizaynni odamlar eslab qoladigan darajada jozibali va noodatiy qilishga harakat qilaman. Qayta-qayta ko‘rishga majbur qiladigan interfeyslar yarataman.
                    </CardText>
                </Card>

                <Card
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <CardTitle>Kelajak Rejam</CardTitle>
                    <CardText>
                        Faqat kod yozib qolmay, kelajakda o‘z brendimni yaratish, boshqalarga ilhom bag‘ishlash va vizual san’atda yangi daraja ochish niyatim bor.
                    </CardText>
                </Card>
            </CardGrid>


        </AboutSection>
    );
};

export default AboutMe;
