import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Zoom,
} from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  PlayToggle,
} from 'video-react';

const SliderVideo = () => {
  return (
    <StyledSwiperVideo
      modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Zoom]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      keyboard={{ enabled: true }}
      centeredSlides={true}
    >
      <SwiperSlide>
        <StyledPlayer
          width="342"
          height="376"
          src="https://res.cloudinary.com/dfqclpulu/video/upload/v1697630980/imcyxbfoff1qo9tubmhk.mp4"
        >
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton disabled />
            <PlayToggle />
          </ControlBar>
        </StyledPlayer>
      </SwiperSlide>
      <SwiperSlide>
        <StyledPlayer
          width="342"
          height="376"
          src="https://res.cloudinary.com/dfqclpulu/video/upload/v1697631006/bgdgvdnnzdna6l6a40cu.mp4"
        >
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton disabled />
            <PlayToggle />
          </ControlBar>
        </StyledPlayer>
      </SwiperSlide>
      <SwiperSlide>
        <StyledPlayer
          width="342"
          height="376"
          src="https://res.cloudinary.com/dfqclpulu/video/upload/v1697630996/h9wraxeuj6ddeyyg0gzq.mp4"
        ></StyledPlayer>
      </SwiperSlide>
    </StyledSwiperVideo>
  );
};

export default SliderVideo;

export const StyledSwiperVideo = styled(Swiper)`
  display: flex;
  width: 100%;
  height: 100%;

  .swiper-slide {
    max-height: 376px;
    video {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  //pagination
  .swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
    width: 74px;
    height: 22px;
  }
  .swiper-pagination-bullet {
    margin: 0 12px;
    width: 14px;
    height: 14px;
    border: 1px solid #777e90;
    background-color: #f2f1f3;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--bg-primery);
  }

  //Media Mob
  @media screen and (max-width: 767px) {
    .swiper-pagination {
      border-radius: 20px;
      background: rgba(242, 241, 243, 0.68);
    }
  }

  //Media Tablet
  @media screen and (min-width: 768px) {
    padding-bottom: 32px;

    .swiper-wrapper {
      height: 500px;
      padding-bottom: 32px;
    }
    .swiper-slide {
      max-height: 500px;
      video {
        height: 500px;
        &&.video-react-big-play-button {
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, -100%);
        }
      }
    }
    .swiper-pagination {
      left: 50%;
      transform: translateX(-50%);
      width: 74px;
      height: 22px;
    }
  }

  //Media Desctop
  @media screen and (min-width: 1440px) {
    .swiper-wrapper {
      max-height: 656px;
    }
    .swiper-slide {
      max-height: 656px;
      video {
        height: 656px;
      }
    }
  }
`;

//Player
export const StyledPlayer = styled(Player)`
  background: transparent;
  &&.video-react-big-play-button {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  &&.video-react-has-started &&.video-react-control-bar {
  }
`;