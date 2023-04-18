import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = 'https://coronavirus.m.pipedream.net/'
export const getData = createAsyncThunk('data/getdata', async ()=> {
      const fetchdata = await axios.get(url)
        const {data} = fetchdata
       let i = 0
        const filtereddata = data.rawData.map((element)=> {
            i += 1
            return {
                country: element.Country_Region,
                deaths: element.Deaths,
                irate: element.Incident_Rate,
                lat: element.Lat,
                long: element.Long,
                cfr: element.Case_Fatality_Ratio,
                state: element.Province_State,
                confirmed: element.Confirmed,
                index: i
            }
        })
        const collect = []
        for(let i = 0;i < filtereddata.length;i++){
            const collected = {}
if(!filtereddata[i].state){
    collected.country = filtereddata[i].country
    collect.push(collected)
}
        }
        console.log(collect)
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
    reducers: {
        displaydata: (state,{payload})=> {
            const filtereddata = state.data.filter(element => element.country === payload)
            return {...state,data: filtereddata}
        }
        },
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
export const { displaydata } = homeSlice.actions

export default homeSlice.reducer