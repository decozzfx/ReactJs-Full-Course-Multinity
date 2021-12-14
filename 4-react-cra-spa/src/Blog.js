import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                <li><Link to='artikel-1'>Artikel 1</Link></li>
                <li><Link to='artikel-2'>Artikel 2</Link></li>
                <li><Link to='artikel-3'>Artikel 3</Link></li>
                <li><Link to='artikel-4'>Artikel 4</Link></li>
            </ul>
        </div>
    )
}

export default Blog
    