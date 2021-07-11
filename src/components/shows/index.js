import React, { useEffect, useState } from "react";
import axios from 'axios';
import Show from "./show";

const Shows = () => {
    const [ shows, setShows ] = useState([]);
        const [ loading, setLoading ] = useState(false);

        useEffect(() => {
            setLoading(true);

            axios.get(`https://api.themoviedb.org/3/discover/tv`, {
                params: {
                    sort_by: 'popularity.desc',
                  api_key: process.env.REACT_APP_API_KEY
                }
              })
                .then((response) => {
                  setLoading(false);
                  setShows(response?.data?.results);
                })
                .catch((error) => {
                  setLoading(false);
                  console.log(error);
                })
        }, [])

    return (
        <div className="flex flex-wrap -mb-4">
            { !loading && shows?.length ?
            shows.map((show, index) => <Show key={show?.id ?? index} show={show}/>)
            : <h2>Loading...</h2>}
        </div>
    )
}

export default Shows