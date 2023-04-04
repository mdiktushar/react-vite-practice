import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = (id) => {
    const user = useLoaderData()
    return (
        <>
            <h1>Name: {user.name}</h1>
            <h4>email: {user.email}</h4>
            <h4>phone: {user.phone}</h4>
        </>
    );
};

export default FriendDetails;