import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Router from './Router';
import Footer from './components/Footer';



const App = () => {
  return (
    
    <div >
    <Container  className='app'> 
      <Header/>
      <Router/>
      </Container>
      <Footer/>
    </div>

  );
};

export default App;