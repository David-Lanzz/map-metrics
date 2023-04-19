import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Links from '../components/Links';
import { getData } from '../redux/home/homeSlice';

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const links = [{ path: '/', text: '' }, { path: 'details', text: '' }];
  return (
    <ul>
      <Links links={links} />
      <Outlet />
    </ul>
  );
};
export default Header;
