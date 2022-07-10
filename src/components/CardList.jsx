import React from 'react'

export default function CardList({ categories }) {
  return (
      <>
    <div>CardList</div>
    <ol>
        {categories.map( category => {
            return(
            <li key={category}>{category}</li>
            )
        })}
    </ol>
    </>
  )
}
