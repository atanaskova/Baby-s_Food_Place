const axios=require('axios');

const recipe_url='http://localhost:3002/recipes';
const auth_url='http://localhost:3001/api/user';

export const fetchRecipes=()=>axios.get(recipe_url);
export const createRecipe=(recipe)=>axios.post(recipe_url,recipe);
export const deleteRecipe=(id)=>axios.delete(`${recipe_url}/${id}`);
export const likeRecipe=(id)=>axios.put(`${recipe_url}/like/${id}`);

export const login=()=>(user)=>axios.post(`${auth_url}/login`,user);
export const register=()=>(user)=>axios.post(`${auth_url}/register`,user);