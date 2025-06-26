import { Button } from 'react-bootstrap';

export default function Header(){
    return(
        <div className="headContainer">
            <h1>My Project Collection</h1>
            <p>A curated archive of my past work, showcasing my journey and growth as a developer.</p>
            <div className='buttonContainer'>
            <Button href='mailto:brendonpillay03@gmail.com' className='proj'>Contact Me</Button>
            <Button href='https://brendon-portfolio.onrender.com/' target='_blank' className='port' variant='outline-primary'>View Portfolio</Button>
            </div>
        </div>
    )
}