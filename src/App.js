import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DetailPage from './routes/DetailPage';
import ListingPage from './routes/ListingPage';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Router>
        <div>
          <header className='py-6 px-4 bg-indigo-700 text-white flex font-bold mb-6 shadow'>
            <Container>
              <Link to='/'>
                <h1 className='text-2xl md:text-4xl'>
                  Nuvalence Address Book
                  <small className='block text-xs mt-1'>
                    Code assignment by Ian McGonigle
                  </small>
                </h1>
              </Link>
            </Container>
          </header>
          <Switch className='my-8'>
            <Route path='/user/:id'>
              <DetailPage />
            </Route>
            <Route path='/'>
              <ListingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
