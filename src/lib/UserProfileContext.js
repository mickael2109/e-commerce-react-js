import React, { createContext, useState } from 'react';

export const UserProfileContext = createContext({
    firstname:'',
    lastname:'',
    email:'',
    adresse:'',
    zipCode:'',
    city:'',
    setUserProfileContext: info => {}
})

const UserProfileContextProvider =  ({ childreen }) => {
    const userProfileState = {
        firstname:'',
        lastname:'',
        email:'',
        adresse:'',
        zipCode:'',
        city:'',
        setUserProfileContext: info => 
            setUserProfile(prevState => ({
            ...prevState,
            firstname : info.firstname,
            lastname : info.lastname,
            email : info.email,
            adresse : info.adresse,
            zipCode : info.zipCode,
            city : info.city,
        }))
    }

    const [userProfile, setUserProfile] = useState(userProfileState)

    return (<UserProfileContextProvider value={userProfile}>{ childreen }</UserProfileContextProvider>)
} 

export default UserProfileContextProvider;