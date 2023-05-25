import React, { useState } from 'react'
import Row from './Row.js'
import Header from './Header.js'

const Table = ({ data, tableSettings, updateSettings }) => {

    const [settings, setSettings] = useState(tableSettings)

    const getTableHeaders = () => {
        return Object.keys(data[0])
    }

    const handleSorting = e => {
        setSettings({ ...settings, sortBy: e })
    }

    const handleDragStart = e => {
    }

    const handleDragEnd = e => {
    }

    return(
        <div>
            { settings.sortBy }
            { (data.length == 0 || data == null)
            ? (<div>No data found.</div>)
            : (<table className='table m-8'>
                    <tbody>
                        <tr className='border-2'>
                            { getTableHeaders().map(header => { 
                                return <Header 
                                            draggable 
                                            key={ header } 
                                            header={ header }
                                            onDragStart={ handleDragStart }
                                            onDragEnd={ handleDragEnd } 
                                            onClick={ handleSorting }/> })}
                        </tr>
                        { data.map( d => <Row key={ d.id } data={ d }/>)}
                    </tbody>
                </table>)}
        </div>
)}

export default Table