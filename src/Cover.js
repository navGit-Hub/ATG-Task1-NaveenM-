import cover from './images/cover.png';
import {Container} from 'react-bootstrap';
const Cover=()=>{
    return (
              <Container fluid className='cover'>             
                   <img src={cover} alt="Computer-Screen" id='cover-image'/>
       <h1 id='Title'>Computer Engineering</h1>
       <p id='Subtitle'>142,765 Computer Engineers follow this</p>
              </Container>
)

}
export default Cover;