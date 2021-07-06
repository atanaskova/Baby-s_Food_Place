import React from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import '../../styles/MyRecipes.style.css';
import ArticleTitle from '../ArticleTitle/ArticleTitle';

const MyRecipes = () => {
  return (
    <div>
      <ArticleTitle title={"My Recipes"} />
      
      <Table className="table-light" responsive style={{marginTop: '40px'}}>
        <thead>
          <tr style={{color:'#F0972A', backgroundColor:'#F8F7F2'}}>
            <th>Recipe Name</th>
            <th>Category</th>
            <th>Created On</th>
            <th></th>
            <th></th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            <TableRow recipeName={"Homemade Pizza"} category={"brunch"} createdOn={"22.11.2020"}/>
            <TableRow recipeName={"Sea Spaghetti"} category={"lunch"} createdOn={"13.10.2020"}/>
            <TableRow recipeName={"Easy Tacos"} category={"dinner"} createdOn={"01.09.2020"}/>
            <TableRow recipeName={"Mexican Burrito"} category={"breakfast"} createdOn={"11.08.2020"}/>
            <TableRow recipeName={"Energy Booster"} category={"diner"} createdOn={"07.08.2020"}/>
            <TableRow recipeName={"Mac & Bacon"} category={"brunch"} createdOn={"02.08.2020"}/>
            <TableRow recipeName={"Energy Booster"} category={"brunch"} createdOn={"27.07.2020"}/>
        </tbody>
      </Table>
    </div>
  );
};

export default MyRecipes;
