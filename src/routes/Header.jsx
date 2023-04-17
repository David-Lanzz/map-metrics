import { Outlet } from "react-router-dom"
import Links from "../components/Links"
import { getData } from "../redux/home/homeSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const Header = ()=> {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getData())
      },[])
    const links = [{path: '/',text: 'home'},{path: 'details',text: 'details'}]
    return (
        <ul>
<Links links={links} />
<Outlet />
        </ul>
    )
}
export default Header