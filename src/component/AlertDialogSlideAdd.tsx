import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useForm, SubmitHandler } from "react-hook-form"
import Instance from '../Api/Instance';

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

function AlertDialogSlideAdd({openAdd, handleCloseAdd, }:any) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) =>
  {
    Instance.put(`add`)
    .then((response) => {
      JSON.stringify({
      title: 'BMW Pencil' , 
      })
      console.log("123" , response)
   });
   alert(JSON.stringify(data));
  };
  return (
    <div>
      <Dialog
        open={openAdd}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseAdd}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Station"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='flex justify-between items-center'>
              <p className='font-bold text-black text-sm'>Station details</p> 
           </div>
           <img className='mt-2 mb-2'  alt="" />
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
                <li className='mb-1'>Adrees</li>
                <li className='mb-1'>Index</li>
                <li className='mb-1'>Priority</li>
                <li className='mb-1'>Pipe</li>
                <li className='mb-1'>Plant</li>
                <li className='mb-1'>Soil</li>
              </ul>
              <ul className=' flex flex-col gap-1 text-right text-[#004744]'>
              <form className='flex flex-col gap-1' onSubmit={handleSubmit(onSubmit)}>
                <input
                {...register("category", {
                    // required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                  })}
                  className='border border-1 text-right' defaultValue=""/>
                  {errors?.category?.type === "required" && <p>This field is required</p>}
                  {errors?.category?.type === "maxLength" && (
                    <p className='text-red-500'>Category cannot exceed 20 characters</p>
                  )}
                  {errors?.category?.type === "pattern" && (
                  <p className='text-red-500'>Alphabetical characters only</p>
                )}
                <input {...register("brand")} className='border border-1 text-right' defaultValue=""  />
                <input {...register("discountPercentage", { min: 10, max: 99 })}
                className='border border-1 text-right' defaultValue=""  />
                {errors.discountPercentage && (
                  <p className='text-red-500'>You Must be older then 10 and younger then 99 </p>
                )}
                <input {...register("rating" ,{pattern: /^\d+$/})} className='border border-1 text-right' defaultValue=""  />
                {errors?.rating?.type === "pattern" && (
                  <p className='text-red-500'>Alphabetical number only</p>
                )}
                <input {...register("stock")} className='border border-1 text-right' defaultValue=""  />
                <input {...register("price")} className='border border-1 text-right' defaultValue="" />
                <input  className='border border-1' type="submit" />
                </form>
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
                {/* <button className='mt-2 w-16 h-8 p-1 bg-[#044744] bg-opacity-20 text-sm text-[#044744] '>Save</button> */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default AlertDialogSlideAdd