import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import AboutPage from './pages/AboutPage';
import AddReviewPage from "./pages/AddReviewPage";
import BookDetailPage from "./pages/BookDetailPage";
import BooksPage from "./pages/BooksPage";
import ContactPage from './pages/ContactPage';
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from './routes/ProtectedRoute';
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/about" element={<ProtectedRoute component={AboutPage} />} />
          <Route path='/books' element={<ProtectedRoute component={BooksPage} />} />
          <Route path='/bookDetail' element={<ProtectedRoute component={BookDetailPage} />} />
          <Route path='/addReview' element={<ProtectedRoute component={AddReviewPage} />} />
          <Route path='/contact' element={<ProtectedRoute component={ContactPage} />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProtectedRoute component={ProfilePage} />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
