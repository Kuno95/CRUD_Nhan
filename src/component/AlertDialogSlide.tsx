import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function AlertDialogSlide({open, handleCloseView, row}:any) {

  // console.log(row)
    return (
      <div>
        {/* <Button  sx={{color: "#044744", fontWeight: "bold" }} onClick={handleClickOpen}>
          VIEW
        </Button> */}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseView}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"View Station"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div className='flex justify-between items-center'>
                <p className='font-bold text-black text-sm'>Station details</p> 
                <div>
                  <button onClick={handleCloseView} className='w-16 h-8 p-1 bg-[#044744] bg-opacity-20 text-sm text-[#044744] '>Close</button>
                  <button onClick={handleCloseView} className='bg-[#044744] w-16 h-8 p-1 ml-1 text-sm text-white'>Edit</button>
                </div>
             </div>
             <img className='mt-2 mb-2' src={row.thumbnail} alt="" />
             <p className='font-bold text-black text-base'>Area A - Center (R) Turf</p>
             <p className='text-sm'>Last update 24/07/2022 11:35:37</p>
             <p className='text-sm'>Last ET update 24/07/2022 11:35:37</p>
             <div className='flex justify-between items-center mt-2 mb-2'>
              <button className='w-16 h-8 p-1 bg-[#044744] bg-opacity-20 text-sm'>On</button>
              <button className='w-16 h-8 p-1 bg-[#044744] bg-opacity-[8%] text-sm'>Off</button>
              <p className='w-[0.5px] h-[28px] bg-[#D7D7D7] '></p>
              <button className='w-16 h-8 p-1 bg-[#FFF2F2]'>Ping</button>
              <button className='bg-[#044744] bg-opacity-20 text-sm w-20 h-8 p-1'>Autoswich</button>
             </div>
             <p className='w-30 h-[0.5px] bg-[#D7D7D7] mt-2 mb-4'></p>
             <div className='flex justify-between mb-4'>
                <ul className='text-black text-base'>
                  <li>Adrees</li>
                  <li>Index</li>
                  <li>Priority</li>
                  <li>Pipe</li>
                  <li>Plant</li>
                  <li>Soil</li>
                </ul>
                <ul className='text-right text-[#004744]'>
                  <li>{row.category}</li>
                  <li>{row.brand}</li>
                  <li>{row.discountPercentage}</li>
                  <li>{row.rating}</li>
                  <li>{row.stock}</li>
                  <li>{row.price}</li>
                </ul>
              </div>
             <p className='w-30 h-[0.5px] bg-[#D7D7D7] mb-4'></p>
             <div className='flex justify-between mb-4'>
                <ul className='text-black text-base'>
                  <li>Water Required (mm)</li>
                  <li>Surface Accumulation (mm)</li>
                  <li>Precipitation Rate (mm/h)</li>
                  <li>Expected Flow (l/m)</li>
                  <li>Landscape Factor(%)</li>
                </ul>
                <ul className='text-right'>
                  <li>0.00</li>
                  <li>0.00</li>
                  <li>6.67</li>
                  <li>45.0</li>
                  <li>12.00</li>
                </ul>
              </div>
             <p className='w-30 h-[0.5px] bg-[#D7D7D7] mb-4'></p>
              <div className='flex justify-between'>
                <p className='text-black text-base'>Error Code</p>
                <p>0</p>
              </div>
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions>
            <Button sx={{color: "#044744", fontWeight: "bold" }} onClick={handleClose}>Disagree</Button>
            <Button sx={{color: "#044744", fontWeight: "bold" }} onClick={handleClose}>Agree</Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
  export default AlertDialogSlide