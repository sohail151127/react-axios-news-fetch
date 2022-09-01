import React, { useState } from 'react'
import axios from "axios"


const FetchNews = () => {
    const [news, setNews] = useState([])

    const fetchnews = () => {
        console.log("button clicked")
        const config = {
            method: "get",
            url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=e97d60e682194cada1a05cfa314933ab"
        }

        axios(config)
            .then((res) => {
                console.log(res.data.articles)
                setNews(res.data.articles)

            })
    }
    return (
        <>
            <div className='container my-3'>
                <div className='row'>
                    <div className='col-4'>
                        <button className='btn btn-primary' onClick={fetchnews}>Fetch News</button>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    {
                        news.map((x) => {
                            return (
                                <>
                                    <div className='col-4'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={x.urlToImage} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{x.title}</h5>
                                                <p className="card-text">{x.description}</p>
                                                <a href="#" className="btn btn-primary">Main</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default FetchNews