import {useEffect,useState}from 'react';
import groups from './images/groups.jpg';
import { useGlobalContext } from './Context';
import {Button,Container,Col} from 'react-bootstrap';

const url='https://course-api.com/react-tours-project';
const Posts=()=>{
 const {login}=useGlobalContext();
const [profiles,setProfiles]=useState([]);
const [isJoined,setIsJoined]=useState(false);
const getData=async ()=>{
  try{
    const response= await fetch(url);
    const profs=await response.json();
    setProfiles(profs);
  }
  catch(error){
      console.log(error);
  }
}
useEffect(()=>{
getData();
},[])
 return (
     <Container fluid>
         <Col>
     <Container className='btn-container' >   
    <Button variant='primary'>Write a post</Button> 
    <br/>
    <br/>
 {login===isJoined?<Button varaint='info' onClick={()=>setIsJoined(!isJoined)}>
    Leave Group
 </Button>:<Button variant='light' onClick={()=>setIsJoined(!isJoined)}>
    Join Group 
     </Button>}
    </Container>
    <div >
{login===isJoined && <img src={groups} alt='A tourist group.' 
className="groups-container"/>}
    </div>
    </Col>
    <Col>
<div className="profile-cards">
{
profiles.map(({id,image,name,info},index)=>{
return (<article className='single-profile' key={id}>
     <img src={image} alt={name} />
      <footer>
        <div className="profile-info">
          <h4>{name}</h4>
        </div>
        <p>{info}</p>
      </footer>
    </article>)

}
)
}
</div>
</Col>
    </Container>
)
}



export default Posts;