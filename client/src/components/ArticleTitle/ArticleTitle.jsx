import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../../styles/ArticleTitle.css';

const ArticleTitle = () => {
    const history=useHistory();

    const redirect = () => {
        history.push('/newrecipe')
      }
    
    return(
        <div className="container p-0">
            <Row style={{alignItems:"flex-end"}}>
                <div className="col-2 p-0">
                    <h1 className="article-title-h2">My Recipes</h1>
                </div>
                <div className="col-9 p-0 article-title-border-bottom">
                    <p className="custom-article-line"></p>
                </div>
                <i className="bi bi-plus-circle-fill" onClick={redirect}/>
            </Row>
        </div>
    )
}

export default ArticleTitle;