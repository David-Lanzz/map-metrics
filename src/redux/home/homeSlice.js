import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://coronavirus.m.pipedream.net/';
export const getData = createAsyncThunk('data/getdata', async () => {
  const fetchdata = await axios.get(url);
  const { data } = fetchdata;
  let i = 0;
  const filtereddata = data.rawData.map((element) => {
    i += 1;
    return {
      country: element.Country_Region,
      deaths: element.Deaths,
      state: element.Province_State,
      confirmed: element.Confirmed,
      index: i,
    };
  });
  const collect = [];
  for (let i = 0; i < filtereddata.length; i += 1) {
    const collected = { states: [] };
    if (!filtereddata[i].state) {
      collected.country = filtereddata[i].country;
      collected.states.push(filtereddata[i]);
      collected.confirmed = filtereddata[i].confirmed;
      collected.index = filtereddata[i].index;
      collect.push(collected);
    }
  }

  for (let i = 0; i < filtereddata.length; i += 1) {
    if (filtereddata[i].state) {
      for (let j = 0; j < collect.length; j += 1) {
        if (filtereddata[i].country === collect[j].country) {
          collect[j].states.push(filtereddata[i]);
        }
      }
    }
  }
  const newarr = [];
  for (let i = 0; i < filtereddata.length; i += 1) {
    const obj = { states: [], confirmed: 0 };
    if (filtereddata[i].state) {
      for (let j = 0; j < collect.length; j += 1) {
        if (filtereddata[i].country !== collect[j].country
            && filtereddata[i].country !== filtereddata[i + 1].country) {
          obj.country = filtereddata[i].country;
          obj.index = filtereddata[i].index;
        }
      }
    }
    if (obj.country) {
      newarr.push(obj);
    }
  }
  for (let i = 0; i < filtereddata.length; i += 1) {
    if (filtereddata[i].state) {
      for (let j = 0; j < newarr.length; j += 1) {
        if (filtereddata[i].country === newarr[j].country) {
          newarr[j].states.push(filtereddata[i]);
          newarr[j].confirmed += +filtereddata[i].confirmed;
        }
      }
    }
  }
  const finaldata = [...newarr, ...collect];
  return finaldata;
});

const initialState = {
  data: [],
  details: [],
  loading: false,
  error: false,
};

const homeSlice = createSlice({
  name: 'home/displayhome',
  initialState,
  reducers: {
    displaydata: (state, { payload }) => {
      const filtereddata = state.data.filter((element) => element.country === payload);
      return { ...state, details: filtereddata[0] };
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getData.pending, (state) => ({
        ...state, loading: true,
      }))
      .addCase(getData.fulfilled, (state, { payload }) => ({
        ...state, data: payload, loading: false,
      }))
      .addCase(getData.rejected, (state) => ({
        ...state, loading: false, error: true,
      }));
  },
});
export const { displaydata } = homeSlice.actions;

export default homeSlice.reducer;
