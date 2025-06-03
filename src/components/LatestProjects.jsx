import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi"; // <-- Qo‘shildi

// Animatsiya
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Neon yaltirash
const neonGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 8px #00e5ff, 0 0 20px #ff66cc;
  }
  50% {
    text-shadow: 0 0 16px #ff66cc, 0 0 32px #00e5ff;
  }
`;

// Style
const ProjectsSection = styled.section`
  min-height: 100vh;
  background: #0a0a0a;
  padding: 5rem 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 3rem;
  color: #00e5ff;
  animation: ${neonGlow} 4s ease-in-out infinite;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1300px;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 229, 255, 0.15);
  backdrop-filter: blur(2px);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: opacity 0.3s;
  pointer-events: none;
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: #111;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 20px #00e5ff33, inset 0 0 10px #ff66cc44;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 0 30px #ff66cc66, inset 0 0 20px #00e5ff99;
  }

  &:hover ${Overlay} {
    opacity: 1;
    pointer-events: auto;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff99bb;
  margin-bottom: 0.5rem;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  font-weight: bold;
  color: #00e5ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// HTTPS orqali rasm va loyiha ma'lumotlari
const projects = [
  {
    id: 1,
    title: "Movie App",
    desc: "API bilan ishlovchi zamonaviy kinolar ilovasi.",
    image: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    id: 2,
    title: "Weather Forecast",
    desc: "Shaharlarga qarab ob-havo ko‘rsatadi.",
    image: "https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    desc: "Shaxsiy portfolio sahifasi React bilan.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    id: 4,
    title: "E-Commerce Site",
    desc: "To‘liq internet-do‘kon checkout bilan.",
    image: "https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    id: 5,
    title: "Crypto Tracker",
    desc: "Kriptovalyuta narxlarini kuzatuvchi ilova.",
    image: "https://images.unsplash.com/photo-1642403711604-3908e90960ce?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  },
  {
    id: 6,
    title: "Task Manager",
    desc: "Vazifalarni rejalashtirish va bajarish tizimi.",
    image: "https://media.istockphoto.com/id/1002126898/photo/close-up-focus-on-employee-hand-point-review-on-dashboard-tablet-for-ask-and-consulting-about.jpg?s=1024x1024&w=is&k=20&c=hb4L80CT3MxNbIfChRSL8XKjqp8qNMnVoLvi_DbKWE4=",
    link: "#"
  },
  
];

const LatestProjects = () => {
  return (
    <ProjectsSection>
      <SectionTitle>Latest Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <Overlay>
              <OverlayContent>
                <FiInfo size={22} />
                Ko‘proq ma’lumot ko’rish uchun ustiga bosing
              </OverlayContent>
            </Overlay>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default LatestProjects;
