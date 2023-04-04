
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (searchTerm) {
            const searchQuery = query(queryCollection, where('nombre', '>=', searchTerm), where('nombre', '<', searchTerm + '\uf8ff'));
            getDocs(searchQuery)
                .then(res => setOptions(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))));
        } else {
            return;
        }
    }, [searchTerm])

    const handleChange = (event, newValue) => {
        if (newValue) {
            setSelectedItemId(newValue.id);
            navigate(`/detalle2/${newValue.id}`);
        } else {
            setSelectedItemId(null);
        }
    };

    return (
        <Box sx={{ width: 220 }}>
            <Autocomplete
                sx={{ borderRadius: 8, color: 'fondo.main', height: 30, mt: 1 }}

                disablePortal={true}
                options={options}
                getOptionLabel={(option) => option.nombre}
                renderOption={(props, option) => (
                    <li {...props} key={option.id} onClick={() => {
                        setSelectedItemId(option.id);
                        navigate(`/detalle2/${option.id}`);
                    }}>
                        {option.nombre}
                        <img className='mini' src={option.img} alt='x'></img>
                    </li>
                )}
                renderInput={(params) => (

                    <TextField sx={{ color: 'info2', borderRadius: 4 }}
                        {...params}
                        label="Buscar..."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder='Ej: mate, maceta...'
                    />
                )}
                onChange={handleChange}
            />
        </Box>
    );
}

export default SearchBar;



