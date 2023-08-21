import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { styled } from '@mui/material';
import AlertDialogSlideAdd from './AlertDialogSlideAdd';
import React from 'react';

interface propsHeader {
    onSearch: (value: string) => void
}
function Hearder ({onSearch}:propsHeader) {
  const MyDiv = styled('div')({
        backgroundColor: 'green',
  })

  const [openAdd, setopenAdd] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');

  const searchItems = (e:any) => {
    setSearchInput(e)
  }
  const OnSubmit = () => {
    onSearch(searchInput)
  }
  const handleAdd = () => {
   setopenAdd(true);
  };
  const handleCloseAdd = () => {
    setopenAdd(false);
  }; 

    return(
        <> 
            <div className='flex justify-between '>
                    <div className='flex gap-2 items-center'>
                        <MenuIcon className='bg-[#044744] bg-opacity-20 rounded primary-color'/> 
                        <p className='text-[13px] text-black font-semibold'>Programs</p>
                    </div>  
                    <div className='flex gap-2 items-center'>
                        <div className='flex flex-col items-end'>
                            <p className='primary-color font-medium text-xs'>Sam Rabela</p>
                            <p className='text-[#5C5C5C] text-xs'>Oranganisation Name</p>
                        </div>
                        <AccountCircleIcon fontSize='large' className='primary-color'/>
                    </div>
            </div>
            <p className="w-50 h-[0.5px] bg-gray-300 mt-3 mb-1 shadow-md"></p>
            <div className='flex justify-between my-2 mt-5'>
                <div>
                    <input value={searchInput} onChange={(e) => searchItems(e.target.value)} className='text-xs border border-gray rounded-lg h-10 shadow IconSearch pl-[27px]' type="text" placeholder='Search programs'/>
                    <button onClick={OnSubmit} className='ml-2 bg-[#044744] bg-opacity-20 text-xs'> <FilterAltIcon className='primary-color' /> Stations</button>
                </div>
                    <div>
                        <button onClick={handleAdd}  className='primary-bgcolor text-xs text-white pl-[25px] h-10 IconCong font-normal '>
                            {/* <AddIcon/> */}
                            Addstation
                        </button>
                    </div>
            </div>
            <AlertDialogSlideAdd openAdd={openAdd} handleCloseAdd={handleCloseAdd}/>
        </>
    )
}
export default Hearder