import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Routes
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Route path="/" element={<Homepage />}></Route>
      
    </Routes>
  );
};
export default App;
