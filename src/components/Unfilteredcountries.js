 import { useDispatch } from "react-redux"
import { displaydata } from "../redux/home/homeSlice"

 const Unfilteredcountries = ({filtered,input,handlechange,search}) => {
   const dispatch = useDispatch()
  const dispatchdata = (country)=> {
    dispatch(displaydata(country))
  }
  return (
    <section>
    <input placeholder="search by country" defaultValue={input} onChange={handlechange} onClick={() => search()} />
<ul className="grid">
        {filtered.map(element => {
          return (
            <li className="elements flex col" key={element.index} onClick={()=> dispatchdata(element.country)}><i className="fa-solid fa-arrow-up-from-bracket absolute">
              </i><section className="data"><div><h4 className="country">{element.country}</h4>
              </div><article className="flex article"><p>{element.confirmed}</p></article></section></li>
          )
        })}
          </ul>
      </section>
  )
}

export default Unfilteredcountries