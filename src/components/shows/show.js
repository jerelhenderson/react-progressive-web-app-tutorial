import React from 'react';

const Show = ({show}) => {
    return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
      <div className="mb-8 text-white">
        <figure className="overflow-hidden mb-4">
          <img src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path ?? ''}`} alt={show.name}/>
        </figure>
        <div className="flex justify-between">
          <p>{show?.first_air_date ?? ''}</p>
          <p className="text-yellow-300 font-bold">{show?.vote_average ?? ''}</p>
        </div>
        <h2>{show?.name ?? ''}</h2>
        <p>{show?.overview ?? ''}</p>
      </div>
    </div>
    )
}

export default Show