import React from 'react'
import {styled} from 'styled-components' 
import PangImage  from '../assets/ggompang.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;


const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;

`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;


const Home = () => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/question')
  }
  return (
    <Wrapper>
      <Header>😼예비집사 판별기😼</Header>
      <Contents>
      <Title>나에게 맞는 주인님은?</Title>
      <LogoImage>
        <img 
        className='rounded-circle'
        src={PangImage} 
        width={350} 
        height={350} 
        />
      </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  )
}

export default Home;