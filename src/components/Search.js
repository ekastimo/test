import React, {useState} from "react"
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from "prop-types";
import axios from "axios";
import {baseUrl, token} from "../constants";

export const Search = (props) => {
    const [search, setSearch] = useState("ekastimo")
    const [loading, setLoading] = useState(false)
    const classes = useStyles();

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSearch() {
        setLoading(true)
        const config = {
            headers: {
                Authorization: `token ${token}`,
            }
        }
        axios.get(`${baseUrl}/${search}`,config)
            .then(function (response) {
                props.onResult(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                props.onResult(null)
                setLoading(false)
            });
    }

    //TODO Add nice loader
    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                disabled={loading}
                onChange={handleChange} value={search}
                className={classes.input}
                placeholder="Search Github"
                inputProps={{'aria-label': 'search Github'}}
            />
            <IconButton
                disabled={loading}
                className={classes.iconButton}
                aria-label="search"
                onClick={handleSearch}
            >
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}

Search.propTypes = {
    onResult: PropTypes.func
};


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


