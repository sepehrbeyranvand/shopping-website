import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const swtichLight = createSlice({
    name:'switchLighti',
    initialState,
    reducers:{
        swtichLight:(state,action)=>{
            state.value = action.payload
        }
    }
})
export const { swtichLighti } = swtichLight.actions;

export default swtichLight.reducer