import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef } from 'react';
import {Form} from 'react-bootstrap'

const API_URL = 'https://api.unsplash.com/search/photos'

function App() {
  console.log(process.env.VITE_API_KEY)

  const searchInput = useRef(null)

  const handleSearch = (event) => {
    event.preventDefault()
  };

  return (
      <div className='container'>
        <h1 className='title'>Image Search</h1>    
        <div className='searchBar'>
          <Form onSubmit={handleSearch}>
            <Form.Control
              type='search'
              placeholder='Type Something'
              ref={searchInput}
            > 
            </Form.Control>
          </Form>
          {/* <input type="search" placeholder='Type something to search...' className='search-input'/> */}
        </div>

      </div>
  );
}

export default App
