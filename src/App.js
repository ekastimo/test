import React, {useState} from 'react';
import './App.css';
import {Search} from "./components/Search";
import {Card} from "./components/Card";

function App() {
    const [results, setResults] = useState([])

    function handleResult(result) {
        console.log("Result", result)
        setResults([...results, result])
    }

    function handleDelete(result) {
        console.log("Result", result)
        setResults([...results, result])
    }



    return (
        <div className="App">
            <header className="App-header">
                <Search onResult={handleResult}/>
            </header>
            <div>
                {
                    results.map(result => <Card data={result}/>)
                }
            </div>
        </div>
    );
}

export default App;
