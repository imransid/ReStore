import styled from 'styled-components';
import {Button, Form, Typography, Input} from 'antd';

import ImageLink from './bg.png';

const {Title} = Typography;

export const BackgroundImage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(${ImageLink});
  /* background-size: cover;
    justify-content: center;
    align-items: center; */

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: 'block';
  width: 100vw;
  height: 100vh;
  padding: 3em;
  /* padding: 30px; */
`;

export const LoginForm = styled(Form)`
  /* padding: 30px; */
  background-color: #ffffff;
  border: 1px solid #e5dacc;
  border-radius: 32px;
  padding-top: 64px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 3em;
`;

export const LoginButton = styled(Button)`
  width: 26vw;
  padding: 12px;
  background-color: #04ee02;
  /* width: '100%'; */
  color: #000000;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  height: 47px;
`;

export const LoginTittle = styled.h1`
  color: #919191;
  font-size: 12px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 50px;
`;

export const RadioText = styled.h5`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #717171;
`;

export const LoginInput = styled(Input)`
  height: 47px;
`;

export const LoginPassword = styled(Input.Password)`
  height: 47px;
`;
