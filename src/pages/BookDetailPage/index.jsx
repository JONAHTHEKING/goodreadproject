import BookDetail from '../../components/BookDetail'
import Navbar from '../../components/Navbar'
import React from 'react'
import Review from '../../components/Review'
import {useLocation} from "react-router-dom"

const BookDetailPage = () => {
    const location = useLocation()
    // const { title, author, description, rating, image } = location.state
    const book = location.state
    return (
        <div>

            <Navbar />
            <BookDetail  data={book}/>
            <Review  data={book}/>

        </div>
    )
}

export default BookDetailPage