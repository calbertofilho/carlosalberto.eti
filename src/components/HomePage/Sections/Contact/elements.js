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
  margin-bottom: 30px;
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

export const Wrapper = styled.div``;

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

export const Info = styled.p``;

export const FormBox = styled.div`
  min-width: 60%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const commonInputStyle = css`
  margin-bottom: 10px;
  padding: 15px;
  font-size: 16px;
  border: none;
  outline: none;
  background: #222;
  color: #fff;
  border-radius: 15px;
`;

export const Label = styled.label`
  color: #01bf71;
  position: relative;
  top: 34px;
  left: 16px;
`;

export const Input = styled.input`
  ${commonInputStyle};
`;

export const TextArea = styled.textarea`
  ${commonInputStyle};
  resize: none;
  min-height: 140px;
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
`;

export const Reset = styled.input`
  ${commonButtonStyle};
  background: #f04135;
`;
