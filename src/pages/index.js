import { useState, useEffect} from 'react';
import { userStore } from '../store/stores';
import {home } from '../api/apis'

const Home = () => {
  const [welcome, setWelcome] = useState([])
  const user = userStore(state => state.user);
  const loadingUser = userStore(state => state.loadingUser);
  
  useEffect(() =>{
    if(!loadingUser && !user){
      window.location.href = '/signin'
    }

  }, [user, loadingUser])
  useEffect(() => {
    home().then(response => {
      setWelcome(response.data)
    })
  }, [])

  return (
    <div className='container'>
      <h1>{welcome}</h1>
      <p>This website is dedicated to Prof. Nzila group 4 Members. </p><br /><br /><br />
      <p>Hebu amueni ni nini tutaweka hii home page, hehe.</p><br /><br />

    <h3>Anyway, Happy New Year guys!!!</h3>

    </div>
  );
};

export default Home;