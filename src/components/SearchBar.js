
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
    const [searchOpen, setSearchOpen] = useState(true);



    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (searchTerm) {
            const searchQuery = query(queryCollection, where('categoria', '>=', searchTerm), where('categoria', '<', searchTerm + '\uf8ff'));
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
            setSearchTerm(''); // aquí se establece el término de búsqueda en cadena vacía
        } else {
            setSelectedItemId(null);
        }
    };

    return (
        <Box sx={{ width: 250, display: 'flex', justifyContent:'center'}}>
            <Autocomplete
               
                open={searchOpen}
                // onSelect={handleSelect}
                onOpen={() => {
                    setSearchOpen(true);
                }}
                onClose={() => {
                    setSearchOpen(false);
                }}
                disablePortal={false}
                // open={options.length > 0}
                noOptionsText={false}
                options={options}
                getOptionLabel={(option) => option.categoria}
                renderOption={(props, option) => (
                    <li  {...props} key={option.id} onClick={() => {
                        setSelectedItemId(option.id);
                        navigate(`/detalle2/${option.id}`);
                        setSearchOpen(false);

                    }} >
                        {option.categoria}
                        <img className='mini' src={option.img} alt='x'></img>

                    </li>
                )}
                renderInput={(params) => (

                    <TextField
                        {...params}
                        label="Buscar..." 
                         sx={{ width: 250, mt: 3, pb: 1.5 }}
                        color='success'
                        value={searchTerm}
                        variant='standard'
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder='Ej: mate, maceta...'
                        InputProps={{
                            sx: {
                               borderRadius: 12,
                            },
                            ...params.InputProps,
                            endAdornment: (
                                <InputAdornment>
                                    <SearchIcon  sx={{pb:0.1,ml:3
                                    , color:'info.main'}}/>
                                </InputAdornment>
                            ),
                        }}


                    />
                )}
                onChange={handleChange}
            />
        </Box>
    );
}

export default SearchBar;



