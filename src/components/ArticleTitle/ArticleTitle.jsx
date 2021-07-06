import React from 'react';
import { Row } from 'react-bootstrap';
import '../../styles/ArticleTitle.css';

const ArticleTitle = ({title}) => {
    return(
        <div className="container p-0">
            <Row style={{alignItems:"flex-end"}}>
                <div className="col-2 p-0">
                    <h1 className="article-title-h1">{title}</h1>
                </div>
                <div className="col-9 p-0 article-title-border-bottom">
                    <p className="custom-article-line"></p>
                </div>
                <div className="col-1 p-0"><i class="bi bi-plus-circle-fill"></i></div>
            </Row>
        </div>
    )
}

export default ArticleTitle;