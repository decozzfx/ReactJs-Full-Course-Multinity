import React,{useEffect} from 'react'

const Profile = () => {
    useEffect(() => {
        document.title = 'Profile'
    }, [])
    return (
        <section className='section'>
            <h1 className='section-title'>Profile</h1>
            <p className='section-desc'>perkenalkan saya decoz, saya sedang mempelajari reactJS dengan course ini</p>
        </section>
    )
}

export default Profile
