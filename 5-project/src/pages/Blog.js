import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = 'Blog'
        getArticles()
    }, [])

    const getArticles = async () => {
        const articles = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
        const response = await articles.json()

        setArticles(response)
        setLoading(false)
    }

    return (
        <section className='section'>
            <h1 className='section-title'>Blog</h1>
            <p className='section-desc'>Berikut ini adalah kumpulan artikel</p>
            {loading && (
                <i>Loading articles...</i>
            )}
            {!loading && (
                <div className='articles'>
                    {articles.map((data) => (
                        <article key={data.id} className='article'>
                            <h3 className='article-title'><Link to={`/blog/${data.id}`}> {data.title} </Link></h3>
                            <date className='article-time'> 
                            { new Date(data.publishedAt).toLocaleDateString()} 
                            </date>
                        </article>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Blog
