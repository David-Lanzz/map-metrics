import { NavLink } from 'react-router-dom';

const Links = ({ links }) => (
  links.map((link) => (
    <li key={link.path}>
      <NavLink to={link.path}>{link.text}</NavLink>
    </li>
  ))
);

export default Links;
