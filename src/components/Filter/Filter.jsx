
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';


const Filter = () => {
    const onSetFilter = payload => {
        dispatch(setFilter(payload));
      };
    
      const updateFilter = event => {
        onSetFilter(event.target.value);
      };
    
      const dispatch = useDispatch();
    


     return (
      <TextField
              margin="normal"
              id="outlined-search" 
              label="Search field" 
              type="search"
              onChange={updateFilter}
            />
     )
}

export default Filter
