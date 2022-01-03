import { useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
  const [welcome, setWelcome] = useState([])
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/`).then((response) => {
      setWelcome(response.data)
    })
  })

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