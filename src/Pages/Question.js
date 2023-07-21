import React, {useEffect, useState} from 'react'
import { styled } from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { QuestionData } from '../assets/data/questiondata';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ececec;
`;

const Contents = styled.div`
  padding: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 왼쪽 : 1점 / 오른쪽 : 0점 
// 합산 점수가 2점 이면 외향 / 미만 내향

const Question = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const navigate = useNavigate();
  
  const [totalScore, setTotalScore] = useState([
    {
      id: "EI",
      score: 0
    },
    {
      id: "SN",
      score: 0
    },
    {
      id: "TF",
      score: 0
    },
    {
      id: "JP",
      score: 0
    },
  ]);

  const handleClickButton = (number, type) => {
    const newScore = totalScore.map(
      (it) => it.id === type ? {id: it.id, score: it.score + number} : it
      );
      console.log(newScore, '뉴스코어');
      setTotalScore(newScore);

    if(QuestionData.length !== questionNumber + 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      // 핵심내용!! reduce(), navigate > createSearchParams
      const mbti = newScore.reduce(
        (acc, curr) => acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), ""
        );
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`
      });
    }
  };

  // const handleClickButtonB = (number, type) => {
  //   if(type === "EI") {

  //     // 기존 스코어에 더할 값을 계산 (*기존값 + 배점)
  //     const addScore = totalScore[0].score + number
  //     // 새로운 객체 생성
  //     const newObject = {id: "EI", score: addScore}
  //     // splice함수를 활용, 새로운 객체로 대체
  //     totalScore.splice(0, 1, newObject);

  //   } else if (type === "SN") {

  //     const addScore = totalScore[1].score + number
  //     const newObject = {id: "SN", score: addScore}
  //     totalScore.splice(1, 1, newObject);

  //   }else if (type === "TF") {

  //     const addScore = totalScore[2].score + number
  //     const newObject = {id: "TF", score: addScore}
  //     totalScore.splice(2, 1, newObject);

  //   } else {
  //     const addScore = totalScore[3].score + number
  //     const newObject = {id: "JP", score: addScore}
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNumber(questionNumber + 1);
  // };

  return (
    <Wrapper>
      <ProgressBar 
      striped 
      variant='danger' 
      now={(questionNumber / QuestionData.length) * 100} 
      
      />
      <Contents>
      <Title>{QuestionData[questionNumber].title}</Title>
      <ButtonGroup>
        <Button 
        variant='secondary'
        style={{
          width: '40%', 
          minHeight: '200px', 
          fontSize: '15px',
          padding: '20px'
          }}
          onClick={() => handleClickButton(1, QuestionData[questionNumber].type)}
          >
            {QuestionData[questionNumber].answera}
          </Button>
        <Button 
        variant='secondary'
        style={{
          width: '40%', 
          minHeight: '200px', 
          fontSize: '15px', 
          marginLeft: '20px',
          padding: '20px'
          }}
          onClick={() => handleClickButton(0, QuestionData[questionNumber].type)}
          >
            {QuestionData[questionNumber].answerb}
          </Button>
      </ButtonGroup>
      </Contents>
    </Wrapper>
  )
}

export default Question;