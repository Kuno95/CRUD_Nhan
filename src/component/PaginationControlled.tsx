import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react'

function PaginationControlled({onChangepage}: any) {
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      onChangepage(value);
    };   
    return (
      <Stack spacing={2} >
        <Typography sx={{fontSize:13}}>Page: {page}</Typography>
        <Pagination  count={10} page={page} onChange={handleChange} />
      </Stack>
    );
    }
    export default PaginationControlled