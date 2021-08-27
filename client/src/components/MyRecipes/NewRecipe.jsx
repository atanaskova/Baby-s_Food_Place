import React,{ useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Form, FormGroup, FormControl, FormLabel, Image } from 'react-bootstrap'
import '../../styles/NewRecipe.css';
import back from '../../images/back-icon.svg';
import img from '../../images/homemadepizza.png';
import { createRecipe } from '../../actions/recipes';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';

const NewRecipe = () => {
  const [recipeData,setRecipeData]=useState({recipe_title:'', category:'',preparation_time:'',no_people:'',recipe_description:'',recipe_details:'',recipe_picture:'',user:'',likes:''})
  const dispatch=useDispatch();
  const history = useHistory();
  const user=JSON.parse(localStorage.getItem('profile'));

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createRecipe({...recipeData,user:user.result._id}));
    history.push('/');
  }

  const redirect = () => {
    history.push('/myrecipes')
  }

  return (
    <div>

      <Header />

      <div className="div-new-recipe">
        <h3 id="newrecipe-title">New Recipe</h3>
        <div id="line"></div>
        <div className="back-div">
          <Image src={back} alt="back" className="icon-back" onClick={redirect}/>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <FormGroup className="new-recipe-form">
          <span className="img-upload">
            <img id="recipeimg" alt="recipe" src={img}/>
            <FileBase 
              type="file" 
              multiple={false}
              onDone={({base64})=>setRecipeData({...recipeData, recipe_picture:base64})}/>
          </span>

          <div className="div-form-column">
            <div className="div-form-wrapper">
              <div className="other-information">
                <div className="first-part">
                  <FormLabel className="rcp-title-label">Recipe Title</FormLabel>
                  <FormControl className="rcp-title-input" 
                  type='text' 
                  placeholder='Homemade Pizza' 
                  name="title" 
                  label="Title"
                  value={recipeData.recipe_title}
                  onChange={(e)=>setRecipeData({...recipeData, recipe_title:e.target.value})}/>
                </div>

                <div className="second-part">
                  <div>
                    <FormLabel className="category-label">Category</FormLabel> <br />
                    <select className="category-select"
                    name="category" 
                    id="category"
                    label="Category"
                    value={recipeData.category}
                    onChange={(e)=>setRecipeData({...recipeData, category:e.target.value})}>
                      <option value="">Select category</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="brunch">Brunch</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                    </select>
                  </div>

                  <div>
                    <FormLabel className="preptime-label">Preparation Time</FormLabel>
                    <FormControl className="preptime-input"
                    type='number'
                    placeholder='45'
                    name="preparation_time"
                    label="Preparation_Time"
                    value={recipeData.preparation_time}
                    onChange={(e)=>setRecipeData({...recipeData, preparation_time:e.target.value})}/>                 
                  </div>

                  <div>
                    <FormLabel className="no-people-label">No. People</FormLabel> 
                    <FormControl className="no-people-input" 
                    type='number' 
                    placeholder='4' 
                    name="no_people" 
                    label="no_people"
                    value={recipeData.no_people}
                    onChange={(e)=>setRecipeData({...recipeData, no_people:e.target.value})}/>
                  </div>
                </div>

                <div className="third-part">
                  <FormLabel  className="short-description-label">Short Description</FormLabel>
                  <textarea
                  className="short-description-label-input" 
                  rows="4" 
                  cols="50"
                  placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage" 
                  name="recipe_description" 
                  label="recipe_description"
                  value={recipeData.recipe_description}
                  onChange={(e)=>setRecipeData({...recipeData, recipe_description:e.target.value})}/>
                </div>
              </div>

              <div className="fourth-part">
                <FormLabel  className="main-recipe-label">Recipe</FormLabel>
                <textarea
                className="main-recipe-label-input" 
                rows="4" 
                cols="50"
                placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"
                name="recipe_details" 
                label="recipe_details"
                value={recipeData.recipe_details}
                onChange={(e)=>setRecipeData({...recipeData, recipe_details:e.target.value})}/>                 
              </div>
            </div>

            <span>
              <button type="submit" className="recipe-save-btn" onClick={handleSubmit}>SUBMIT</button>
            </span>
          </div>
          </FormGroup>
        </Form>

      <Footer />
    </div>
  );
};

export default NewRecipe;
