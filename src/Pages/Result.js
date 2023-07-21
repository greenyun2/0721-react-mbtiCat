import React, {useEffect, useState} from 'react'
import {styled} from 'styled-components' 
import PangImage  from '../assets/ggompang.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


const Result = () => {
  const [searchParams] = useSearchParams();
  const [mbtiData, setMbtiData] = useState({});
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/');
  };

  const mbti = searchParams.get("mbti");

  useEffect(() => {
    const result = ResultData.find((it) => it.best === mbti);
    setMbtiData(result);
  }, [mbti]);
  
  
  // const resultData = searchParams.get('mbti');
  // console.log(resultData, "결과?");
  // const mbtiResult = ResultData.find((it) => it.best === resultData);
  // console.log(mbtiResult, "엠비티아이");
  // console.log(mbtiData, "스테이트데이터");

  return (
    <Wrapper>
      <Header>예비집사 판별기😼</Header>
      <Contents>
      <Title>결과보기</Title>
      <LogoImage>
        <img 
        className='rounded-circle'
        src={mbtiData.image} 
        width={350} 
        height={350} 
        />
      </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {mbtiData.best}형 {mbtiData.name} 입니다.</Desc>
        <Button onClick={handleClickButton}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  )
}

export default Result;