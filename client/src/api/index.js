const axios=require('axios');

const RECIPE_API=axios.create({ baseURL:'http://localhost:3002'});
const AUTH_API=axios.create({ baseURL:'http://localhost:3001'});

AUTH_API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

RECIPE_API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchRecipes=()=>RECIPE_API.get('/recipes');
export const createRecipe=(recipe)=>RECIPE_API.post('/recipes',recipe);
export const deleteRecipe=(id)=>RECIPE_API.delete(`/recipes/${id}`);
export const likeRecipe=(id)=>RECIPE_API.put(`/recipes/like/${id}`);

export const login=(userData)=>AUTH_API.post(`/api/user/login`,userData);
export const register=(userData)=>AUTH_API.post(`/api/user/register`,userData);