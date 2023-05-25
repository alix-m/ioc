import React from 'react'

const Row = ({ data }) => {

  return (
    <tr className='border-2'>
        { Object.values(data).map(v => <td key={ v } className='p-4'>{ v instanceof Date ? v.toDateString() : v }</td>)}
    </tr>
  )
}

export default Row