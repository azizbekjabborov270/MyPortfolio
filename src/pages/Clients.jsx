import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #1f1f1f;
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const SlideCard = styled.div`
  background: #2b2b2b;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(236, 72, 153, 0.3);
  max-width: 600px;
  margin: 0 auto;
`;

const Quote = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ddd;
`;

const Author = styled.h4`
  margin-top: 1.5rem;
  font-weight: bold;
  color: #ec4899;
`;

const Clients = () => {
  return (
    <Section>
      <Title>Honourable Client Says</Title>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        style={{ paddingBottom: '3rem' }}
      >
        <SwiperSlide>
          <SlideCard>
            <Quote>
              “Azizbek bilan ishlash juda yoqimli bo‘ldi! U barcha vazifalarni o‘z vaqtida va mukammal bajaradi.”
            </Quote>
            <Author>— Jamshid T., UX Designer</Author>
          </SlideCard>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard>
            <Quote>
              “U React va frontend bo‘yicha ajoyib ishlaydi. Har bir loyihada mukammallikka intiladi.”
            </Quote>
            <Author>— Dilfuza M., Product Manager</Author>
          </SlideCard>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard>
            <Quote>
              “Professional yondashuvi va kreativ fikri uchun rahmat! Yana birga ishlaymiz, albatta.”
            </Quote>
            <Author>— Islom B., Full-Stack Developer</Author>
          </SlideCard>
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default Clients;
