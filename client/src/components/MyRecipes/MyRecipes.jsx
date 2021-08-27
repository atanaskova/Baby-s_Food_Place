import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import '../../styles/MyRecipes.css';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import { getRecipes } from '../../actions/recipes';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';

const MyRecipes = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getRecipes());
  },[dispatch]);

  const recipes=useSelector((state)=>state.recipes)

  return (
    <div>
      <Header />

      <ArticleTitle/>

      {!recipes.length ? (
        <div className="loading">
        <SkeletonTheme color="#F5BE14"> 
          <Skeleton className="skeleton2" count={3}/>
        </SkeletonTheme>
        </div>
      ):(      
      <Table className="table-light" responsive style={{marginTop: '30px'}}>
        <thead>
          <tr className="font-weight-bold main">
            <th>Recipe Name</th>
            <th>Category</th>
            <th>Created On</th>
            <th></th>
            <th></th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            <TableRow />
        </tbody>
      </Table>
        )}
    <Footer />
  </div>
  );
};

export default MyRecipes;