import * as api from '../api';

export const login=(user,history)=>async(dispatch)=>{
    try {
       const {data}=await api.login(user);
        dispatch({type: 'AUTH', data});
       history.push('/');
    } catch (error) {
        console.log(error.response.data);
    }
}

export const register=(user,history)=>async(dispatch)=>{
    try {
        const {data}=await api.register(user);
         dispatch({type: 'AUTH', data});
        history.push('/');
    } catch (error) {
        console.log(error.response.data);
    }
}