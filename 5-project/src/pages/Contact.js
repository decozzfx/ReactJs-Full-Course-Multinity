import React,{useEffect} from 'react'

const Contact = () => {
    useEffect(() => {
        document.title = 'Home'
    }, [])
    return (
        <section className='section'>
            <h1 className='section-title'>Contact</h1>
            <p className='section-desc'>kontak email dan telp yang dapat dihubungi dibawah ini :</p>
            <ul>
                <li>Wa : 0989017237</li>
                <li>Email : decoz@mail.com</li>
            </ul>
            <p>Social Media</p>
            <ul>
                <li><a href="www.twitter.com">Twitter</a></li>
                <li><a href="www.facebook.com">facebook</a></li>
                <li><a href="ww.instagram.com">instagram</a></li>
            </ul>
        </section>
    )
}

export default Contact
