import React from 'react';
import ArticleRow from './ArticleRow';

const ArticleList = (props) => {

  const rows = props.articles.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/3) // 3 articles per row

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new row
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return (
    <div>
      {rows.map((row, i) => <ArticleRow key={i} row={row} addSave={props.addSave} deleteSave={props.deleteSave} isSaved={props.isSaved} />)}
    </div>
  )
}

export default ArticleList;
