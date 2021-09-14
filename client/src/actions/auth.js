import * as api from '../api';

export const login=(userData,history)=>async(dispatch)=>{
    try {
       const {data}=await api.login(userData);
        dispatch({type: 'AUTH', data});
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

export const register=(userData,history)=>async(dispatch)=>{
    try {
        const {data}=await api.register(userData);
        dispatch({type: 'AUTH', data});
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser=(id,user)=>async(dispatch)=>{
    try {
        const {data}=await api.updateUser(id,user);
        dispatch({type:'UPDATE', data});
    } catch (error) {
        console.log(error.message);
    }
}

export const confirmEmail=(email)=>async(dispatch)=>{
    try {
        const {data}=await api.confirmEmail(email);
        dispatch({type:'UPDATE', data});
    } catch (error) {
        console.log(error.message);
    }
}

export const resetPassword=(update)=>async(dispatch)=>{
    try {
        const {data}=await api.resetPassword(update);
        dispatch({type:'UPDATE', data});
    } catch (error) {
        console.log(error.message);
    }
}