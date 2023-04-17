import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = 'https://coronavirus.m.pipedream.net/'
export const getData = createAsyncThunk('data/getdata', async ()=> {
      const fetchdata = await axios.get(url)
        const {data} = fetchdata
       const spliced = data.rawData.splice(0,500)
       console.log(spliced)
        const filtereddata = spliced.map((element)=> {
            return {
                country: element.Country_Region,
                Deaths: element.Deaths,
                irate: element.Incident_Rate,
                lat: element.Lat,
                long: element.Long,
                cfr: element.Case_Fatality_Ratio,
                state: element.Province_State

            }
        })
    return filtereddata
})
const initialState = {
data: [],
loading: false,
error: false
}

const homeSlice = createSlice({
    name: 'home/displayhome',
    initialState,
    extraReducers: (builders) => {
        builders
        .addCase(getData.pending, (state)=>( {
 ...state,loading: true
        }))
        .addCase(getData.fulfilled,(state,{payload})=> ({
...state,data: payload,loading: false
        }))
        .addCase(getData.rejected,(state)=> ({
            ...state, loading: false,error: true
        }))
    }
    
})

export default homeSlice.reducer