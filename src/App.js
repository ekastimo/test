import React, {useState} from 'react';
import './App.css';
import {Search} from "./components/Search";
import {MyCard} from "./components/Card";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import Alert from '@material-ui/lab/Alert';

function App() {
    const [results, setResults] = useState([])
    const [error, setError] = useState(null)

    function handleResult(result) {
        if (results.some(it => it.id === result.id)) {
            setError("Duplicate entry")
        } else {
            setResults([...results, result])
        }
    }

    function handleDelete(result) {
        const newResults = results.filter(it => it.id !== result.id);
        setResults(newResults)
    }

    function clearError() {
        return setError(null);
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="xl">
                <Box width='100%' pt={2}>
                    <Typography variant='h6'>Github Search</Typography>
                </Box>
                <Box width='100%' py={1}>
                    <Search onResult={handleResult}/>
                </Box>
                {
                    error &&
                    <Box width='40%' py={1}>
                        <Alert severity="error" onClose={clearError}>{error}</Alert>
                    </Box>
                }
                <Box width='100%' display="flex" flexDirection="row">

                    {
                        results.map(result => <Box p={1} key={result.id}>
                            <MyCard data={result} onDelete={handleDelete}/>
                        </Box>)
                    }
                </Box>
            </Container>
        </React.Fragment>

    );


}

export default App;
