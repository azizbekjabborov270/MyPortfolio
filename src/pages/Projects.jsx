import React from 'react';
import styled from 'styled-components';

// Loyihalar kartasi uchun styled-component
const ProjectCard = styled.div`
  background: #1f1f1f;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.8);
  }
`;

// Rasmlar uchun styled-component
const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
    filter: brightness(1.1);
  }
`;

// Matn konteyneri (kartaning pastki qismi)
const ProjectContent = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Loyihaning sarlavhasi
const ProjectTitle = styled.h3`
  color: #ec4899;
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
`;

// Tavsif matni
const ProjectDescription = styled.p`
  color: #ddd;
  font-size: 1rem;
  flex-grow: 1;
`;

// Linklar uchun konteyner (GitHub, Demo tugmalari)
const LinksContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

// Tugmalar uchun styled-link
const LinkButton = styled.a`
  padding: 0.5rem 1rem;
  background: #ec4899;
  color: #ffffff;
  font-weight: 700;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.7);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: #e9e9e9;
    box-shadow: 0 0 20px #f43f5e;
  }
`;

// Grid konteyner
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem; /* yuqori va pastga 4rem, yonlarga 2rem */
`;


const projectsData = [
  {
    id: 1,
    title: "Bookmark App",
    description: "Bookmark ilovasi, foydalanuvchilar o'z sevimli veb-saytlarini saqlash va boshqarish imkonini beradi. React va styled-components yordamida yaratilgan.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://bookmark-2.vercel.app/login",
    githubUrl: "https://github.com/azizbekjabborov270/bookmark"
  },
  {
    id: 2,
    title: "Pokedox",
    description: "Pokedox ilovasi, Pokemon haqidagi ma'lumotlarni ko'rsatish uchun yaratilgan. React va styled-components yordamida yaratilgan.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bDoe5ztjhFlTjO1xBsTUQSKJBK8F4kan7A&s",
    demoUrl: "https://pokedox-kappa.vercel.app/",
    githubUrl: "https://github.com/azizbekjabborov270/dars8"
  },
   {
    id: 3,
    title: "Movie App",
    description: "Movie App, foydalanuvchilarga filmlar haqida ma'lumotlarni ko'rsatish imkonini beradi. React va styled-components yordamida yaratilgan.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1710962537846-dca5c74f5c6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://movie-box-roan.vercel.app/",
    githubUrl: "https://github.com/azizbekjabborov270/Movie"
  },
  // Yana boshqa loyihalar qo‘shishingiz mumkin
];

const PageContainer = styled.div`
  padding: 4rem 2rem;
`;

const Projects = () => {
  return (
    <PageContainer>
      <ProjectsGrid>
        {projectsData.map(({id, title, description, imageUrl, demoUrl, githubUrl}) => (
          <ProjectCard key={id}>
            <ProjectImage src={imageUrl} alt={title} />
            <ProjectContent>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDescription>{description}</ProjectDescription>
              <LinksContainer>
                <LinkButton href={demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</LinkButton>
                <LinkButton href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</LinkButton>
              </LinksContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PageContainer>
  );
};


export default Projects;
