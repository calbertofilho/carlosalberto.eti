import styled from 'styled-components';

export const Section = styled.section`
  background: #010606;
	width: 100%;
	height: 100vh;
  padding: 100px 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (hover: none), (any-hover: hover) and (pointer: coarse) {
    scroll-snap-align: none;
  }

  @media screen and (min-height: 800px) {
    justify-content: center;
  }
`;

export const Emphasis = styled.span`
  color: #01bf71;
  display: block;
  font-size: 2.5rem;
  line-height: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  min-width: 20rem; // 320px
  width: 55rem; // 880px
  padding: 1rem; // 16px
  border-radius: 2rem; // 32px
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 48px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
`;

export const InputArea = styled.div`
  position: relative;
  margin: 32px 0;
`;

export const Input = styled.input`
  height: 4rem;
  height: 100%;
  width: 100%;
  color: #01bf71;
  border: none;
  font-size: 1.7rem;
  background: linear-gradient(90deg, #010606, #01bf71) left bottom/0 2px no-repeat,
              linear-gradient(90deg, #010606, #003b23) left bottom/100% 2px no-repeat,
              linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0)) left bottom/100% no-repeat;
  transition: background-size 0.3s ease;

  &:focus {
    background-size: 100% 2px, 100% 2px, 100%;
  }
  &:focus + label,
  &:not(:placeholder-shown)&:not(:focus) + label {
    transform: translateY(-1.8rem);
    color: #01bf71;
  }
  &:not(:placeholder-shown)&:not(:focus) {
    background-size: 100% 2px, 100% 2px, 100%;
  }
`;

export const Label = styled.label`
  position: absolute;
  bottom: 0.2rem;
  left: 0;
  color: #003b23;
  pointer-events: none;
  font-size: 1.7rem;
  transition: transform 0.3s ease,
              color 0.3s ease;
`;

export const TextArea = styled.textarea`
  --textarea-height: 13rem;
  --textarea-transform: -13.7rem;
  resize: none;
  margin: 1rem 0;
  height: var(--textarea-height);
  width: 100%;
  color: #01bf71;
  border: none;
  font-size: 1.7rem;
  background: linear-gradient(90deg, #010606, #01bf71) left bottom/0 2px no-repeat,
              linear-gradient(90deg, #010606, #003b23) left bottom/100% 2px no-repeat,
              linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0)) left bottom/100% no-repeat;
  transition: background-size 0.3s ease;

  &:focus {
    background-size: 100% 2px, 100% 2px, 100%;
  }
  & + label {
    transform: translateY(-1.1rem);
  }
  &:focus + label,
  &:not(:placeholder-shown)&:not(:focus) + label {
    transform: translateY(var(--textarea-transform));
    color: #01bf71;
  }
  &:not(:placeholder-shown)&:not(:focus) {
    background-size: 100% 2px, 100% 2px, 100%;
  }

  @media screen and (max-height: 800px) {
    --textarea-height: 6rem;
    --textarea-transform: -6.7rem;
  }
`;

export const ButtonArea = styled.div`
  position: relative;
  margin: 32px 0;
  display: flex;
  justify-content: right;
`;

export const Button = styled.input`
  border-radius: 50px;
  background: #01bf71;
  padding: 10px 22px;
  color: #010606; 
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;
