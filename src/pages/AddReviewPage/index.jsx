import BookDisplay from '../../components/BookDisplay'
import Navbar from '../../components/Navbar'
import React from 'react'
import ReviewForm from '../../components/ReviewForm'
import { useLocation } from "react-router-dom"

const AddReviewPage = () => {
  const location = useLocation()
  const book = location.state
  return (
    <div>
      <Navbar />
      <BookDisplay data={book} />
      <ReviewForm />
    </div>
  )
}

export default AddReviewPage