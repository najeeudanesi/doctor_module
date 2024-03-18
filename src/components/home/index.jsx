
import React, { useEffect, useContext, useState } from 'react';


import { post } from '../../utility/fetch';
import coatOfArm from '../../assets/images/coat-of-arm.png';
import Footer from '../layouts/Footer';
import notification from '../../utility/notification';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

    const [email, setEmail] = useState("najeeudanesi@gmail.com");
    const [password, setPassword] = useState("123123123aA@");
    const navigate = useNavigate();
  const makePostRequest = async () => {
 const   payload = {
    usernameOrEmail: email,
        password: password,
    }
    try {
      
      const data = await post(
        `/Auth/login/`, payload
      );
      if (data) {
        console.log(data)
        sessionStorage.setItem('token', "Bearer "+ data.jwt.token);
        localStorage.setItem('USER_INFO', JSON.stringify(data));
       navigate('/dashboard');
      }
    } catch (error) {
      localStorage.removeItem('USER_INFO');
      notification({
        title: 'ACCESS DENIED',
        message:'Sorry, This user does not have access to this application. Please Contact Admin',
        type: 'warning',
      });
    }
    // setTimeout(() => window.location.assign("/"), 6000);
  };

  useEffect(() => {
    makePostRequest();
  }, []);

  return (
    <div className="w-100">
      <div className="banner">
        <div className="login">
          <div className="coat-of-arm">
            <img src={coatOfArm} alt="" />
            <h2>EDO STATE</h2>
            <h4>GOVERNMENT</h4>
          </div>
          <div className="form">Loading...</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
