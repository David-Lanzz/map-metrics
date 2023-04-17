import { useSelector } from "react-redux"
import "../styles/home.css"
const Homepage = () => {
    const store = useSelector((store)=> store.homeReducer)
    const { data } = store
    console.log(data)
  return (
    <ul className="grid">
{data.map(element => {
  return (
    <li className="elements flex col"><button className="absolute">btn</button><p>{element.country}</p></li>
  )
})}
    </ul>
  )
}

export default Homepage