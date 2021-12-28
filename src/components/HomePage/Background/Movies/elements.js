import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoMovie = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: fixed;
  background: #010606;
  filter: hue-rotate(100deg) blur(1.25px);  /* Greenish Filter like Matrix Movie */
`;
