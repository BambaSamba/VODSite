import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieInfo() {
    const params = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        doApi();
    }, [params.id]); 

    const doApi = async () => {
        let url = `http://www.omdbapi.com/?i=${params.id}&apikey=521c8106`;
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
        setItem(data);
    };

    if (!item) return <h2>Loading...</h2>; 

    return (
        <div className='container p-2 text-center'>
            <img src={item.Poster} alt={item.Title} className='col-md-4'/>
            <h2>{item.Title}</h2>
            <div>Runtime: {item.Runtime}</div>
            <div>Rating: {item.imdbRating}</div>
            <div>Genre: {item.Genre}</div>
            <div className='col-md-5 mx-auto'>Plot: {item.Plot}</div>
            <button className='btn btn-dark mt-3' onClick={() => window.history.back()}>
                Back to list
            </button>
        </div>
    );
}
