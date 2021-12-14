import React, {useEffect} from 'react'

const Home = () => {

    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <section className='section'>
            <h1 className='section-title'>Selamat Datang di Website</h1>
            <p className='section-desc'>Ini adalah Website Blog baru yang dibangun dengan teknologi reactJS, ini adalah project latihan di course ini</p>
        </section>
    )
}

export default Home
