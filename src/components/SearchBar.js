

import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';



function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const [selectedItemId, setSelectedItemId] = React.useState(null);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (searchTerm) {
            const queryFilter = query(queryCollection, where('nombre', '==', searchTerm))
            getDocs(queryFilter)
                .then(res => setOptions(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        // } else {
        //     setOptions([options]);
        // }
    }
    }
    const handleChange = (event, newValue) => {
        if (newValue) {
            setSelectedItemId(newValue.id);
            navigate(`/detalle2/${newValue.id}`);
        } else {
            setSelectedItemId(null);
        }
    };
console.log(options);
    return (
        <Box sx={{ width: 220 }}>
            <Autocomplete sx={{ borderRadius: 8, color:'info.main', height: 30, mt:1}}
            disablePortal={false}
            options={options}
            getOptionLabel={(option) => option.nombre}
            renderOption={(props, option) => (
                <li  {...props} key={option.id} onClick={() => {
                    setSelectedItemId(option.id);
                    navigate(`/detalle2/${option.id}`);
                }}>
                    {option.nombre}
                    <img className='mini' src={option.img} alt='x'></img>
                </li>
            )}
            renderInput={(params) => (
                <TextField sx={{color:'info2'}}
                    {...params}
                    label="Buscar"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleSearch(event);
                        }
                    }}
                />
            )}
            onChange={handleChange}
        />
        </Box>
    );
}
export default SearchBar;


