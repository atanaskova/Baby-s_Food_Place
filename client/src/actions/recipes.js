import * as api from '../api';

export const getRecipes=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchRecipes();
        dispatch({type:'FETCH_ALL', payload:data})
    } catch (error) {
        console.log(error.message);
    }
}

export const createRecipe=(recipe)=>async(dispatch)=>{
    try {
        const {data}=await api.createRecipe(recipe);
        dispatch({type:'CREATE', payload:data})
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRecipe=(id)=>async(dispatch)=>{
    try {
        await api.deleteRecipe(id);
        dispatch({type:'DELETE',payload:id})
    } catch (error) {
        console.log(error);
    }
}

export const likeRecipe=(id)=>async(dispatch)=>{
    try{
        await api.likeRecipe(id);
        dispatch({type:'LIKE',payload:id})
    }catch(error){
        console.log(error.message)
    }
}