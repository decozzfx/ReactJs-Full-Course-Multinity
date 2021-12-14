import React from 'react'
import { useParams } from 'react-router'

const BlogDetails = () => {

    const url = useParams()

    return (
        <div>
            <h1>Halaman Blog Detail</h1>
            <p>Hello ini adalah blog detail dari {url.slug}</p>
        </div>
    )
}

export default BlogDetails
