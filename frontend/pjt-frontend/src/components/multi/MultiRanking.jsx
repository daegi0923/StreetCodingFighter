import React from 'react';
import styled from 'styled-components';

const MultiRanking = ({userList}) => {
  return (
    <GraphContainer>
      <LeaderBoardSecond>
        <PodiumPlayerContainer>
          {userList[1] ? (
            <>
              <div>{userList[1].name}</div>
              <div>{userList[1].score}</div>
            </>
          ) : (
            <NoPlayerData>No Data</NoPlayerData>
          )}
        </PodiumPlayerContainer>
        <PlaceHolder>2</PlaceHolder>
      </LeaderBoardSecond>
      <LeaderBoardFirst>
        <PodiumPlayerContainer>
          {userList[0] ? (
            <>
              <div>{userList[0].name}</div>
              <div>{userList[0].score}</div>
            </>
          ) : (
            <NoPlayerData>No Data</NoPlayerData>
          )}
        </PodiumPlayerContainer>
        <PlaceHolder>1</PlaceHolder>
      </LeaderBoardFirst>
      <LeaderBoardThird>
        <PodiumPlayerContainer>
          {userList[2] ? (
            <>
              <div>{userList[2].name}</div>
              <div>{userList[2].score}</div>
            </>
          ) : (
            <NoPlayerData>No Data</NoPlayerData>
          )}
        </PodiumPlayerContainer>
        <PlaceHolder>3</PlaceHolder>
      </LeaderBoardThird>
    </GraphContainer>
  );
};

export default MultiRanking;

const GraphContainer = styled.div`
  display: flex;
  background-color: #f1f3f5;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  width: 30vw;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LeaderBoardFirst = styled.div`
  position: relative;
  margin: 0 20px;
  background-color: #ffd700;
  width: 25%;
  height: 50%;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const LeaderBoardSecond = styled.div`
  position: relative;
  margin: 0 20px;
  background-color: #c0c0c0;
  width: 20%;
  height: 40%;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const LeaderBoardThird = styled.div`
  position: relative;
  margin: 0 20px;
  background-color: #cd7f32;
  width: 20%;
  height: 30%;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const PodiumPlayerContainer = styled.div`
  position: absolute;
  bottom: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const NoPlayerData = styled.div`
  color: #495057;
  font-size: 1em;
  text-align: center;
  padding: 10px;
`;

const PlaceHolder = styled.div`
  position: absolute;
  top: 10px;
  font-size: 1.5em;
`;