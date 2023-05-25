import React from 'react'

const Header = ({ id, header, onClick, onDragStart, onDragEnd }) => {

  return (
    <th
      className='p-4'
      onClick={ () => onClick(header) }
      onDragStart={ onDragStart }
      onDragEnd={ onDragEnd }
      draggable
    >
      { header }
    </th>
  )
}

export default Header