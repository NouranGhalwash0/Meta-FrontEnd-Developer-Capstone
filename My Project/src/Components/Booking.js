import React from "react";
import BookingForm from "./BookingForm";

const Booking = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} SubmitForm={submitForm} />
    );
};

export default Booking;
