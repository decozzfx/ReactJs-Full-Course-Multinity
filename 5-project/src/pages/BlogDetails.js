import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

    const {id} = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        document.title='Blog Details'
        getArticle()        
    }, [])

    const getArticle = async () => {
        const article = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)

        if(!article.ok){
            return setNotFound(true)
        }

        const respone = await article.json()

        document.title = respone.title
        setArticle(respone)
        setLoading(false)
    }

    if(notFound){
        return <h1>Article tidak ditemukan</h1>
    }

    return (
        <section className='section'>
            <h1 className='section-title'>Details of Blog</h1>
            {loading ? ( <i>Loading blog content...</i>) : ( 
                <article className='article'>
                    <h3 className='article-title'>{article.title}</h3>
                    <time className='article-time'>{new Date(article.publishedAt).toLocaleDateString()} </time>
                    <img className='article-image' src={article.imageUrl} alt={article.title} />
                    <p className='article-summary'>{article.summary}</p>
                    <p className='article-src'>Source : <a href={article.url} target='_blank' rel="noreferrer">{article.newsSite}</a></p> 
                </article>
             )}          
        </section>
    )
}

export default BlogDetails
