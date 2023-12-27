import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import NavBar from './component/navbar';
import { Routes, Route } from 'react-router-dom';
import MyProfile from './component/myprofile/myprofile'
import DisplayContent from './component/mission/mission'
import { fetchMission } from './reduxreducers/missionSlice/mSlice';
import { getRockets } from './reduxreducers/rocketSlice/rSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchMission())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRockets())
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="Mission" element={<DisplayContent />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
