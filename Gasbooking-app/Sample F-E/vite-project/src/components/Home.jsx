import React from 'react'
import Card from 'react-bootstrap/Card'

function Home() {
  return (
    <div>
    <div className='mt-3'   style={{ display: 'flex', justifyContent: 'center',  }} >
     
      <input 
        type="text" 
        placeholder="Search..." 
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
      /> 
    </div>
  
    <Card  style={{ width: '25rem', margin: '30px', padding:'90px' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <div>
    <Card style={{ width: '25rem', margin: '30px', padding:'90px' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card  style={{ width: '25rem', margin: '30px', padding:'90px' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>

    </div>
    
   
  )
}

export default Home
