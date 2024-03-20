import { Header, Footer, Books, BookView, SignUp, SignIn, BookAdd } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/book/:bookId" element={<BookView />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin/book/add" element={<BookAdd />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
