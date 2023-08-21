import { useState, useEffect } from 'react'
import './App.css'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Hearder from './component/Header'
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import AlertDialogSlide from './component/AlertDialogSlide';
import Instance from './Api/Instance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AlertDialogSlideEdit from './component/AlertDialogSlideEdit';
import PaginationControlled from './component/PaginationControlled';
import AlertDialogSlideDelete from './component/AlertDialogSlideDelete';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#044744',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function App() {
  const [data, setData] = useState([])
  const [pages, setPages] = useState(0)
  const [row, setRow] = useState([])
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  
  const handleClickOpenView = (id:number) => {
    Instance.get(`${id}`)
    .then((response) => {
      setRow(response.data);
   });
    setOpen(true);
  };

  const onResearch = (value : string) => {
  Instance.get(`search?q=${value}`)
    .then((response) => {
      setData(response.data.products);
   });
  }

  const handleCloseView = () => {
    setOpen(false);
  };
  
  const handleClickOpenEdit = (id:number) => {
    Instance.get(`${id}`)
    .then((response) => {
      setRow(response.data);
      console.log(id)
   });
   setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  }; 
  function handleDelete () {
    setOpenDelete(true);

  }
   const handleCloseDelete = () => {
    setOpenDelete(false);
   }; 
   const handleCloneDelete = () => {
    setOpenDelete(false);
   }

  // const notify = () => toast("Wow so easy!");

  useEffect(() => {
    Instance.get(`?limit=5&skip=${pages}`)
    .then(function (response) {
      setData(response.data.products);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[pages])

    function onChangepage(num: number){
      const value = (num - 1)* 5
      setPages(value)  
  }

  return (
    <>
    <Hearder onSearch={onResearch} />
    <TableContainer className='mt-5' component={Paper}>
      <Table sx={{ minWidth: 850,}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor:'#EFEFEF'}}>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} > ID</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Title</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Description</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Stock</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Rating</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Enabled</TableCell>
            <TableCell sx={{fontWeight:600 , color:'#333333', fontSize:12}} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontSize:12}} component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell sx={{fontSize:12}} align="left">{row.title}</TableCell>
              <TableCell sx={{fontSize:12}} align="left">{row.description}</TableCell>
              <TableCell sx={{fontSize:12}} align="left">{row.stock}</TableCell>
              <TableCell sx={{fontSize:12}} align="left">{row.rating}</TableCell>
              <TableCell sx={{fontSize:12}} align="left">
              <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  // label="Female"
                />
              </TableCell>
              <TableCell align="left">
                <div className='flex'>
                  <button onClick={() => handleClickOpenView(row.id)} className='primary-color font-semibold text-[13px]'>VIEW</button>
                  <button onClick={() => handleClickOpenEdit(row.id)} className='ml-2 primary-color font-semibold text-[13px]'>EDIT</button>
                  <button onClick={handleDelete} className='ml-3  primary-color_delete text-[13px]'>DELETE</button>
                  <ToastContainer />
                </div> 
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className='text-[13px] flex justify-between mt-10  bottom-0 w-[calc(100%_-_2rem)]'> 
      <p>Showing 1 to 10 of page</p>
      <PaginationControlled onChangepage={onChangepage}/>
    </div> 
    <AlertDialogSlide row={row} open={open} handleCloseView={handleCloseView}/>
    <AlertDialogSlideEdit openEdit={openEdit} handleCloseEdit={handleCloseEdit} row={row} />
    <AlertDialogSlideDelete openDelete={openDelete} handleClickDelete={handleCloseDelete} handleCloneDelete={handleCloneDelete}/>
    </>
  )
}
export default App