import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useEffect } from 'react';


export default function Dropdown({ handleChangeCountry }) {
    const [ c, setC ] = React.useState('');

    const [ countries, setCountries ] = React.useState([]);
    const fetchInfo = async () => {
        let res = await axios.get("https://countriesnow.space/api/v0.1/countries")
        setCountries(res.data.data);
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const handleChange = (event) => {
        handleChangeCountry(event.target.value);
        setC(event.target.value);
    };

    return (
        <div>
            <FormControl required sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-simple-select-required-label">COUNTRY</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={c}
                    label="Country *"
                    onChange={handleChange}
                >

                    {countries.map((coun, ind) => {
                        return <MenuItem value={coun.country}> {coun.country} </MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
