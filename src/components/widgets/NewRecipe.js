import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, Image } from 'react-bootstrap'
import '../../styles/NewRecipe.css';
import image from '../../images/homemadepizza.png';
import back from '../../images/back-icon.svg';

const NewRecipe = () => {
  return (
    <div className="my-recipes-container">
      <div className="div-my-recipes">
        <h3 id="myrecipes-title">My Recipes</h3> <hr id="hr10-2" />
        <div className="back-div">
          <Image src={back} alt="" className="icon-back" />
        </div>
      </div>
      <div className="new-recipe-form">
        <Form>
          <FormGroup className="new-recipe-form">
            <div className="img-and-btn">
              <h4 className="image-title">Recipe Image</h4>
              {/* <Image src={image} alt="" className="image-info" /> */}
              <button className="image-btn">Upload Image</button>
            </div>
            <div className="div-form-column">
              <div className="div-form-wrapper">
                <div className="other-information">
                  <div>
                    <FormLabel className="rcp-title-label">Recipe Title</FormLabel>
                    <FormControl className="rcp-title-input" type='text' placeholder='Homemade Pizza' name='recipeTitle' />
                  </div>
                  <div className="second-part">
                    <div className="div-select-category">
                      <FormLabel className="category-label" for="category">Category</FormLabel> <br />
                      <select className="category-select" name="category" id="category">
                        <option value="">Select category</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="brunch">Brunch</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                      </select>
                    </div>
                    <div>
                      <FormLabel className="preptime-label">Preparation Time</FormLabel>
                      <FormControl className="preptime-input" type='number' placeholder='45' name='preparationTime' />
                    </div>
                    <div>
                      <FormLabel className="no-pepole-label">No. People</FormLabel> 
                      <FormControl className="no-people-input" type='number' placeholder='4' name='numPeople' />
                    </div>
                  </div>
                  <div className="third-part">
                    <FormLabel for="short-description" className="short-description-label">Short Description</FormLabel>
                    <textarea id="short-description" name="shortDescription" className="short-description-label-input" rows="4" cols="50"
                      placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage" />
                  </div>
                </div>
                <div className="recipe-information">
                  <FormLabel for="main-recipe" className="main-recipe-label">Recipe</FormLabel>
                  <textarea id="main-recipe" name="mainRecipe" className="main-recipe-label-input" rows="4" cols="50"
                    placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"/>
                </div>
              </div>
              <div>
                <button type="submit" className="recipe-save-btn">
                  Save
                </button>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default NewRecipe;
