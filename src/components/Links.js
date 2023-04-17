import { NavLink } from "react-router-dom"
const Links = ({links}) => {
  return (
    links.map(link => {
       return (<li key={link.path}>
<NavLink to={link.path}>{link.text}</NavLink>
       </li>)
    })
  )
}

export default Links