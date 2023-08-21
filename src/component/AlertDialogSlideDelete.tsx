import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


type Inputs = {
    example: string
    exampleRequired: string
    category: string
    discountPercentage: number
    brand: string
    rating: number
    stock: number
    price: number
  }
  
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

function AlertDialogSlideDelete ({openDelete, handleClickDelete, handleCloneDelete}:any) {
    // console.log("123", handleClickDelete())
    const notify = () => {toast("Wow so easy!")
    handleCloneDelete()
    }
    
    return (
        <div>
        <Dialog
          open={openDelete}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClickDelete}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                <div className='p-2'>
                    <h3 className='text-[20px] font-normal text-[#000000]'>Delete Station?</h3>
                    <p className='text-xs font-normal text-[#000000]'>This action is not reversible, all child-organisation data will be deleted.</p>
                    <div className='flex justify-end mt-10'>
                        <button onClick={handleClickDelete} className='text-sm text-[#004744] bg-[#04474433] bg-opacity-20 mr-3'>Cancel</button>
                        <button onClick={notify} className='text-sm bg-[#004744] text-white'>Confirm</button>
                    </div>
                </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    )
}
export default AlertDialogSlideDelete