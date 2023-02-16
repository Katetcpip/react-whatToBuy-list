import 'components/App/App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Items from 'components/Items';
import ReviewPage from 'components/ReviewPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
       <Header />
        <Routes>
          <Route path='/' element={ <Items />}/>
          <Route path='/reviews' element={ <ReviewPage />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
