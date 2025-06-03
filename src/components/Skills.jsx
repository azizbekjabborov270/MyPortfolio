import React from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt } from "react-icons/fa";

const neonGlow = keyframes`
  0%, 100% {
    text-shadow:
      0 0 6px #00e5ff,
      0 0 15px #00e5ff,
      0 0 30px #ff66cc,
      0 0 45px #ff66cc;
  }
  50% {
    text-shadow:
      0 0 10px #ff66cc,
      0 0 25px #ff66cc,
      0 0 40px #00e5ff,
      0 0 60px #00e5ff;
  }
`;

const SkillsSection = styled.section`
  min-height: 100vh;
  background: #0a0a0a;
  padding: 4rem 2rem;
  color: #ff99bb;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at center, #ff99bb, transparent 70%);
  opacity: 0.15;
  animation: ${neonGlow} 6s ease-in-out infinite;
  filter: blur(18px);
  z-index: 0;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 3rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ff99bb;
  animation: ${neonGlow} 4s ease-in-out infinite;
  user-select: none;
  position: relative;
  z-index: 10;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));
  gap: 3rem;
  width: 100%;
  max-width: 900px;
  position: relative;
  z-index: 10;
`;

const SkillCard = styled(motion.div)`
  background: #111;
  border-radius: 20px;
  padding: 2rem;
  box-shadow:
    0 0 12px #00e5ffaa,
    inset 0 0 15px #ff66cccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow:
      0 0 30px #ff66ccdd,
      inset 0 0 30px #00e5ffdd;
  }
`;

const rotateHover = keyframes`
  from { transform: scale(0.2);}
  to { transform: scale(1);}
`;

const SkillIcon = styled.div`
  font-size: 4rem;
  color: #00e5ff;
  margin-bottom: 1rem;
  animation: none;
  ${SkillCard}:hover & {
    animation: ${rotateHover} 2s linear infinite;
  }
`;

const SkillName = styled.h3`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #ff99bb;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background: #222;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00e5ff, #ff66cc);
  width: 0%;
  border-radius: 10px;
`;

const skillsData = [
  { id: 1, name: "React", icon: <FaReact />, level: 90 },
  { id: 2, name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { id: 3, name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  { id: 4, name: "JavaScript", icon: <FaJsSquare />, level: 85 },
  { id: 5, name: "Node.js", icon: <FaNodeJs />, level: 80 },
  { id: 6, name: "Git", icon: <FaGitAlt />, level: 70 },

  // Qo‘shilganlar
  { id: 7, name: "Styled-Components", icon: <FaCss3Alt />, level: 88 },
  { id: 8, name: "Framer Motion", icon: <FaReact />, level: 82 },
];


const Skill = ({ icon, name, level, inView }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: `${level}%` });
    }
  }, [controls, inView, level]);

  return (
    <SkillCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <SkillIcon>{icon}</SkillIcon>
      <SkillName>{name}</SkillName>
      <ProgressBarContainer>
        <ProgressFill
          animate={controls}
          initial={{ width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </ProgressBarContainer>
      <div style={{ marginTop: "0.5rem", color: "#00e5ff", fontWeight: 700, fontSize: "1rem" }}>
        {level}%
      </div>
    </SkillCard>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <SkillsSection ref={ref}>
      <ParallaxLayer />
      <SectionTitle>My Skills</SectionTitle>
      <SkillsGrid>
        {skillsData.map(({ id, name, icon, level }) => (
          <Skill key={id} icon={icon} name={name} level={level} inView={inView} />
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
