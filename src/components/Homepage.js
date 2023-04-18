import { useSelector } from "react-redux"
import { useState } from "react"
import Unfilteredcountries from "./Unfilteredcountries"
import Filteredcountries from "./Filteredcountries"
const Homepage = () => {
  const store = useSelector((store) => store.homeReducer)
  const { data } = store
  const filtered = data.filter(element => !element.state)
  const [input,changeInput] = useState('')
   const [searching,changeSearching] = useState(false)
  const handlechange = (e)=> {
    changeInput(e.target.value)
  }
   const search = ()=> {
  changeSearching(true)
   }
  if(!searching) {
    return (
      <Unfilteredcountries filtered={filtered} handlechange={handlechange} input={input} search={search}/>
    )
  }
   else {
   return(<Filteredcountries filtered={filtered} handlechange={handlechange} input={input} search={search}/>)
   }
}

export default Homepage