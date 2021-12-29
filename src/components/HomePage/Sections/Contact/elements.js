import styled, { css } from 'styled-components';

export const Section = styled.section`
  background: #010606;
	width: 100%;
  height: 100%;
	min-height: 100vh;
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

export const EmphasisBox = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
`;

export const Emphasis = styled.span`
  color: #01bf71;
  display: block;
  font-size: 30px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 16px;
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactInfoBox = styled.div`
  min-width: 40%;
  align-self: flex-start;
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const InfoBox = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
`;

export const Icon = styled.div`
  color: #01bf71;
  font-size: 24px;
  min-width: 24px;
`;

export const Text = styled.div`
  display: flex;
  margin-left: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  flex-direction: column;
`;

export const InfoTitle = styled.h1`
  color: #01bf71;
  font-size: 18px;
  font-weight: 500;
`;

export const Info = styled.p`
  color: #fff;
`;

export const FormBox = styled.div`
  min-width: 60%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 24px;
`;

export const EmailArea = styled.div`
  width: 70%;
  position: relative;
  display: grid;
`;

export const TelArea = styled.div`
  width: 30%;
  display: grid;
`;

export const commonInputStyle = css`
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  font-size: 16px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 20px;
  background: linear-gradient(to right, #01bf71, #01bf71) left bottom/0 2px no-repeat,
              linear-gradient(to right, #010606, #222) left bottom/100% 2px no-repeat,
              linear-gradient(to top, #01bf71, 0.5%, #010606) left bottom/0 no-repeat;
  transition: background-size 0.3s ease;

  &:focus {
    background-size: 100% 2px,
                     100% 2px,
                     100%;
  }
  &:not(:placeholder-shown)&:not(:focus) {
    background-size: 100% 2px,
                     100% 2px,
                     0%;
  }
  &:focus + label,
  &:not(:placeholder-shown)&:not(:focus) + label {
    transform: translate(-16px, -34px);
    color: #01bf71;
  }
`;

export const Label = styled.label`
  color: #aaa;
  position: relative;
  pointer-events: none;
  top: -45px;
  left: 16px;
  transition: transform 0.3s ease,
                  color 0.3s ease;
`;

export const Input = styled.input`
  ${commonInputStyle};

  &.email {
    padding-right: 40px;
  }
`;

export const TextArea = styled.textarea`
  ${commonInputStyle};
  resize: none;
  min-height: 140px;

  & + label {
    top: -136px;
  }
`;

export const Indicator = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 10px;
  height: 10px;
  background: #222;
  border-radius: 50%;

  &.valid {
    background: #0f0;
    box-shadow: 0 0  5px #0f0,
                0 0 10px #0f0,
                0 0 20px #0f0,
                0 0 40px #0f0;
  }
  &.invalid {
    background: #f00;
    box-shadow: 0 0  5px #f00,
                0 0 10px #f00,
                0 0 20px #f00,
                0 0 40px #f00;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 24px;
`;

export const commonButtonStyle = css`
  width: 120px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px 22px;
  letter-spacing: 2px;
  border-radius: 50px;
  color: #010606; 
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;

export const Submit = styled.input`
  ${commonButtonStyle};
  background: #01bf71;

  &.disabled {
    display: block !important;
    pointer-events: none;
    background: #222;
    color: #aaa;
    border: solid 1px #aaa;
  }
`;

export const Reset = styled.input`
  ${commonButtonStyle};
  background: #f04135;
`;
