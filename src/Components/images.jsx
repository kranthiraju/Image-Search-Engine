import React, { useEffect, useState } from 'react';
import './images.css';

export default function Images({search}) {
    const [images,setImages]=useState([]);
    const [perpage,setPerpage]=useState(8);
    const client_id="ZJFFBfURnHP3kduVjv070ltBtl9Wq3qjugvfumQlOZg";

    const getImages=(perpage)=>{
        const url="https://api.unsplash.com/search/photos?client_id="+client_id+"&query="+search+"&per_page="+perpage;
        fetch(url).then(response=>{
            return response.json()
        })
        .then(data=>{
            setImages(data.results);
        });
    }

    const handleMore=()=>{
        setPerpage(perpage*2);
    }
    useEffect(()=>{
        getImages(perpage);
    },[perpage])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        getImages(8);
    },[search])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="images">
            <h1>{search}</h1>
            <p>{images.length} Images has been found</p>
            <div className="images_grid">
                {images.map((image)=>(
                    <img className="img" src={image.urls.small} key={image.id} alt={image.urls.small}></img>
                ))}
            </div>
            <button className="load_more" onClick={handleMore}>Load More</button>
        </div>
    )
}
