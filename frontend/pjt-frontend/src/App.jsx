import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitlePage from "./components/sanghyeon/pages/TitlePage.jsx";
import LoginPage from "./components/sanghyeon/pages/LoginPage.jsx";
import FindPasswordPage from "./components/sanghyeon/pages/FindPasswordPage.jsx";
import ChangePasswordPage from "./components/sanghyeon/pages/ChangePasswordPage.jsx";
import SignUpPage from "./components/sanghyeon/pages/SignUpPage.jsx";
import MainPage from "./components/sanghyeon/pages/MainPage.jsx";
import ProfilePage from "./components/sanghyeon/pages/ProfilePage.jsx";
import RecordPage from "./components/sanghyeon/pages/RecordPage.jsx";
import ReportPage from "./components/sanghyeon/pages/ReportPage.jsx";
import SolvedPage from "./components/sanghyeon/pages/SolvedPage.jsx";
import SingleMain from "./components/single/SingleMain.jsx";
import SinglePlay from "./components/single/single-play/SinglePlay.jsx";
import MultiMain from "./components/multi/MultiMain.jsx";
import MultiCreate from "./components/multi/MultiCreate.jsx";
import BattleCreate from "./components/battle/BattleCreate.jsx";
import BattleMain from "./components/battle/BattleMain.jsx";
import MultiGame from "./components/multi/MultiGame.jsx";
import BattleGame from "./components/battle/BattleGame.jsx";
import Ranking from "./components/ranking/Ranking.jsx";
import SoundStore from "./stores/SoundStore.jsx";
import React, { useEffect } from 'react';

function App() {
  const { initializeBackgroundMusic, stopBackgroundMusic, isPlaying } = SoundStore();

  useEffect(() => {
    // 배경음악 초기화 및 재생
    initializeBackgroundMusic('/BGM-1.mp3');

    return () => {
      // 컴포넌트가 언마운트될 때 배경음악 정지
      console.log('stop music');
      stopBackgroundMusic();
    };
  }, [initializeBackgroundMusic, stopBackgroundMusic]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/find-password" element={<FindPasswordPage />} />
          <Route path="/reset-password" element={<ChangePasswordPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup-character" element={<CharacterSelection />} />
          <Route
            path="/ranking"
            element={accessToken ? <Ranking /> : <LoginPage />}
          />
          <Route
            path="/main"
            element={accessToken ? <MainPage /> : <LoginPage />}
          />
          <Route
            path="/profile"
            element={accessToken ? <ProfilePage /> : <LoginPage />}
          />
          <Route
            path="/record"
            element={accessToken ? <RecordPage /> : <LoginPage />}
          />
          <Route
            path="/report"
            element={accessToken ? <ReportPage /> : <LoginPage />}
          />
          <Route
            path="/solved"
            element={accessToken ? <SolvedPage /> : <LoginPage />}
          />
          <Route
            path="/solved/:solvedId"
            element={accessToken ? <SolvedDetailPage /> : <LoginPage />}
          />
          <Route
            path="/multi"
            element={accessToken ? <MultiMain /> : <LoginPage />}
          />
          <Route
            path="/multi-create"
            element={accessToken ? <MultiCreate /> : <LoginPage />}
          />
          <Route
            path="/battle"
            element={accessToken ? <BattleMain /> : <LoginPage />}
          />
          <Route
            path="/battle-create"
            element={accessToken ? <BattleCreate /> : <LoginPage />}
          />
          <Route
            path="/multi-game"
            element={accessToken ? <MultiGame /> : <LoginPage />}
          />
          <Route
            path="/single-main"
            element={accessToken ? <SingleMain /> : <LoginPage />}
          />
          <Route
            path="/single-play"
            element={accessToken ? <SinglePlay /> : <LoginPage />}
          />
          <Route
            path="/multi-game-select"
            element={accessToken ? <SelectProblem /> : <LoginPage />}
          />
          <Route path="*" element={<TitlePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;