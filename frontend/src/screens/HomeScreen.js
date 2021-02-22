import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MetaHelmet from '../components/MetaHelmet';

const HomeScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [history, userInfo]);

  return (
    <>
      <MetaHelmet title='Home' />
      <h2>HOME SCREEN</h2>
    </>
  );
};

export default HomeScreen;
