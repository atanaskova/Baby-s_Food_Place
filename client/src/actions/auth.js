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