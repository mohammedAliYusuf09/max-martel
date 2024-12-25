'use client'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { ToastContainer, toast } from 'react-toastify';

function AppointmentDilog() {

    

type AppointmentFormFields = 'name' | 'date' | 'time';

const AppointmentAction = (formData: FormData) => {
    const getField = (key: AppointmentFormFields) => formData.get(key) as string | null;

    const name = getField('name');
    const date = getField('date');
    const time = getField('time');

    toast(`${name} You have an appointment on ${date}, ${time} | it is a dammy website`);

    if (!name || !date || !time) {
        throw new Error("All fields are required");
    }
};


    

  return (
    <>
    <ToastContainer />
    <Dialog>
        <DialogTrigger><span className='bg-black px-3 py-2 rounded-md border border-gray-400 text-white cursor-pointer'>Appointment</span></DialogTrigger>
        <DialogContent>
        <DialogHeader>
            <DialogTitle>Get an Appointment</DialogTitle>
            <DialogDescription>
            After filling this form you will be notified wather you successfully have an appointment or you must change appointment time.
            </DialogDescription>
        </DialogHeader>
        <form className='flex flex-col gap-4' action={AppointmentAction}>
            <input required className='focus:outline-none bg-transparent border-b border-gray-700 py-2 sm:py-4 text-lg' type="text" name="name" id="name" placeholder='Name'/>
            <div className='flex gap-4'>
                <input required className='focus:outline-none bg-transparent border-b border-gray-700 py-2 sm:py-4 text-lg' type="date" name="date" id="date" placeholder='Date'/>
                <input required className='focus:outline-none bg-transparent border-b border-gray-700 py-2 sm:py-4 text-lg' type="time" name="time" id="time" placeholder='Time'/>
            </div>
            <div className='flex justify-end'>
                <button type='submit' className='bg-black px-3 py-2 rounded-md border border-gray-400 text-white cursor-pointer'>Done</button>
            </div>
        </form>
        </DialogContent>
    </Dialog>
    </>
  )
}

export default AppointmentDilog