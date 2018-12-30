import React from 'react';
import ArticleRow from './ArticleRow';


const Articles = (props) => {

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
      {rows.map((row, i) => <ArticleRow key={i} row={row} />)}
    </div>
  )
}

export default Articles;
