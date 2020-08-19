import React, {useState} from "react"
import axios from 'axios'
import {baseUrl} from "../constants";
export const Search = (props) => {
    const [search, setSearch] = useState("")

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSearch() {
        axios.get(`${baseUrl}${search}`)
            .then(function (response) {
                console.log(response);
                props.onResult(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    return <div>
        <input type='text' onChange={handleChange} value={search}/>
        <button onClick={handleSearch}>Search</button>
    </div>
}


