import logo from './logo.svg';
import './App.css';
import { RegisterationForm } from './RegistrationForm/RegisterationForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin/registration' element={<RegisterationForm />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
