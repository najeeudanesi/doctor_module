
import React, { useEffect, useContext, useState } from 'react';


import { post } from '../../utility/fetch';

import greenz from '../../assets/images/Greenzone.png';
import icon from '../../assets/images/Group-2.png';


import Footer from '../layouts/Footer';
// import notification from '../../utility/notification';
import { useNavigate } from 'react-router-dom';
import InputField from '../UI/InputField';
import toast from 'react-hot-toast';


const Home = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();


  const makePostRequest = async () => {
    setLoading(true);
    const payload = {
      usernameOrEmail: email,
      password: password,
    }
    try {

      const data = await post(
        `/Auth/login/`, payload
      );
      if (data) {
        console.log(data)
        sessionStorage.setItem('token', "Bearer " + data.jwt.token);
        localStorage.setItem('name', data.firstName + " " + data.lastName)
        localStorage.setItem('role', data.role)
        localStorage.setItem('USER_INFO', JSON.stringify(data));
        navigate('/dashboard');
      }
    } catch (error) {
      localStorage.removeItem('USER_INFO');
      // notification({
      //   title: 'ACCESS DENIED',
      //   message: 'Sorry, This user does not have access to this application. Please Contact Admin',
      //   type: 'warning',
      // });

      toast.error("Login failed")
    }
    // setTimeout(() => window.location.assign("/"), 6000);

    setLoading(false)
  };

  // useEffect(() => {
  //   makePostRequest();
  // }, []);

  return (
    <div className="w-100">
      <div className="banner">
        <div className="log flex-h-center w-100">
          <div>
            <div className='flex flex-v-center w-100 m-l-20'>
              <div className='margin-lg'>
                <div className='m-l-20'><img src={icon} alt='' width={26} height={26} /></div>
                <div> <img src={greenz} alt='' width={100} height={26} /></div>
              </div>
            </div>

            <div className=' m-t-40'>
              <label>Username or Email</label>
              <InputField type="text" name={"email"} value={email} placeholder={"username or email"} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='m-t-40'>
              <label>Password</label>
              <InputField type="password" name={"password"} value={password} placeholder={"password"} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='m-t-40'> <button disabled={loading} onClick={makePostRequest} className='w-100 btn'>Submit</button></div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
