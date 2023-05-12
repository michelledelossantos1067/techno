import React,{useState} from 'react'
import styled from 'styled-components'
import Burger from './Burger'


function Navbar() {

const [clicked,setClicked] = useState(false)
const handleClick = ()=>{
setClicked(!clicked)
}

    return (
        <>

            <NavContainer>



                <h2>Navbar <span>Responsive</span></h2>
                <div className={`link ${clicked ? 'active' : ''}`}>
                    <a href='/'> Home</a>
                    <a href='/'> Shop</a>
                    <a href='/'> About</a>
                    <a href='/'> Contact</a>
                    <a href='/'> Blog</a>

                </div>
                <div className='burguer'>
                    <Burger clicked={clicked} handleClick={handleClick}/>

                </div>
                

            </NavContainer>
        </>
    )

}
export default Navbar
const NavContainer = styled.nav`
h2{
    color:#fff;
    fort-weight: 400;
    span{
        font-weight:bold;
    }
}
padding:.4rem;
background-color:#333;
display: flex;
align-items:center;
justify-content:space-between;
a{
    display:flex;
    color:#fff;
    text-decoration:none;
    margin-right:1rem;
}
div{
    display:flex;
}
.link{
    position:absolute;
    top:-700px;
    left:-2000px;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    a{
        color:#333;
        font-size:2rem;
        display:block;
    }
    @media(min-width:768px){
        position:initial;
        margin:0;
        a{
            color:#fff;
            font-size:1rem;
            display:inline;
        }
    }
        
}

.link.active{
    width:100%;
    display:block;
    position:absolute;
    margin-left:auto;
    margin_right:auto;
    top:30%;
    left:0;
    right:0;
    text-align:center;
    a{
    color:#333;
    
}
}

.burguer{
    @media(min-width:768px){
        display:none;
    }
}
`