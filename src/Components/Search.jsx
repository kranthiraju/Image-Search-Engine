import React, { useRef, useState } from 'react';
import './Search.css';
import Images from './images';

export default function Search() {
    const searchRef=useRef();
    const [search,setSearch]=useState('');
    const handleSearch=()=>{
        setSearch(searchRef.current.value);
    }
    return (
        <>
        <div className="search">
            <input type="text" placeholder="Search for photos" ref={searchRef}/>
            <button onClick={handleSearch}><i className="fa fa-search"></i></button>
        </div>
        {search.length!==0?
            <Images search={search}/>:
            ''}
        </>
    )
}
