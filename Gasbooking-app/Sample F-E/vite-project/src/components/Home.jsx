import React from 'react'
import Card from 'react-bootstrap/Card'
import Wavegas from './wave'


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

    <div className='d-flex flex-row justify-content- -around'>
    <Card className='justify-content-center col-md-4' style={{ width: '23rem', margin: '30px', padding:'60px' }}>
      <Card.Body>
        <Card.Title>Wave gas</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
        <Card.Link href="Wavegas">Card Link</Card.Link>
      </Card.Body>
    </Card>
    
    <Card className='justify-content-center col-md-4' style={{ width: '25rem', margin: '30px', padding:'60px' }}>
      <Card.Body>
        <Card.Title>Gentle gas</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
        <Card.Link href="Gentlegas">Card Link</Card.Link>
       
      </Card.Body>
    </Card>

    <Card className='justify-content-center col-md-4' style={{ width: '25rem', margin: '30px', padding:'60px' }}>
      <Card.Body>
        <Card.Title>HM agency</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
         
        </Card.Text>
        <Card.Link href="Hmagency">Card Link</Card.Link>
      </Card.Body>
    </Card>

    <Card className='justify-content-center col-md-4' style={{ width: '25rem', margin: '30px', padding:'60px' }}>
      <Card.Body>
        <Card.Title>Butterfly gas</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text> 
        
        </Card.Text>
        <Card.Link href="Butterflygas">Card Link</Card.Link>
      </Card.Body>
    </Card>


    <Card className='justify-content-center col-md-4' style={{ width: '25rem', margin: '30px', padding:'60px' }}>
      <Card.Body>
        <Card.Title>kumaran agency</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
         
        </Card.Text>
        <Card.Link href="Kumaranagency">Card Link</Card.Link>
      </Card.Body>
    </Card>


    <Card className='justify-content-center col-md-4' style={{ width: '25rem', margin: '30px', padding:'60px' }}>
      <Card.Body>
        <Card.Title>Go gas providers</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
         
        </Card.Text>
        <Card.Link href="Gogas">Card Link</Card.Link>
      </Card.Body>
    </Card>

    </div>

    </div>
    
   
  )
}

export default Home
