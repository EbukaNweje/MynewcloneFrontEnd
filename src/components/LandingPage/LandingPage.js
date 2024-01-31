import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Footer from './Footer/Footer';
import HeroPage from './Hero1/HeroPage'
import Hero2Page from './Hero2/Hero2Page';
import Hero3 from './Hero3/Hero3';
import Hero4 from './Hero4/Hero4';
import Hero5 from './Hero5/Hero5';
import Hero6 from './Hero6/Hero6';
import Hero5new from './Land5/Land5';

const LandingPage = ({changeDisplay}) => {
    const [isVisible, setIsVisible] = useState(false);
  const [numberChange, setNumberChange] = useState(0)


 

  const ShowName = [
    {
      name: 'Alount Ridet',
      Pay: "made a deposit of $5000"
    },
    {
      name: 'Amanda Wills',
      Pay: " successfully withdrew $10000"
    },
    {
      name: 'Charles Bob',
      Pay: "successfully withdrew $40000"
    },
    {
      name: 'Hannah Daines',
      Pay: "made a deposit of $10000"
    },
    {
      name: 'Chrissie Toralba',
      Pay: "successfully withdrew $20000"
    },
    {
      name: 'Janis Calloway',
      Pay: "made a deposit of $3000"
    },
    {
      name: 'Maria R Tomei',
      Pay: "made a deposit of $30000"
    },
    {
      name: 'Richard Sykes',
      Pay: "made a deposit of $100000"
    },
    {
      name: 'Kc Knutson',
      Pay: "successfully withdrew $10000"
    },
    {
      name: 'Kevin Corliss ',
      Pay: "successfully withdrew $100000"
    },
    {
      name: 'Cathy Housley Vesely',
      Pay: "made a deposit of $100000"
    },
    {
      name: 'Brandie Spadoni',
      Pay: "made a deposit of $5000"
    },
    {
      name: 'Alex Runge',
      Pay: "made a deposit of $3000"
    },
    {
      name: 'Cat Raye Monroe',
      Pay: "made a deposit of $7000"
    },
    {
      name: 'Destinee Ann Spangler',
      Pay: "successfully withdrew $500000"
    },
    {
      name: 'Stacy Weinstein Petruzzi',
      Pay: "made a deposit of $20000"
    },
    {
      name: 'Emily Lutz Leighty',
      Pay: "made a deposit of $5000"
    },
  ]

  useEffect(() => {
    // Function to toggle the component's visibility
    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };
    const toggleVisibilitynew = () => {
      const number = Math.floor(Math.random() * ShowName.length)
      setNumberChange(number)
      console.log(number)
    };

    // Set up an interval to toggle visibility every 60 seconds (1 minute)
    const intervalId = setInterval(toggleVisibility, 5000); // 60000 milliseconds = 60 seconds
    const intervalIdnew = setInterval(toggleVisibilitynew, 5000); // 60000 milliseconds = 60 seconds
    // Clear the interval when the component unmounts
 
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalIdnew); 
    };
    
  }, []);


  useEffect(()=>{

    /* eslint-disable-next-line no-unused-expressions */
    return changeDisplay
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])
  return (
    <Container>
        <HeroPage/>
        <Hero2Page/>
        <Hero3/>
        <Hero5new/>
        <Hero4/>
        <Hero5/>
        <Hero6/>
        <Footer/>

        {
          isVisible && (
            <DisplayShow>
            <h5>{ShowName[numberChange].name} </h5>
            <span>{ShowName[numberChange].Pay}</span>
          </DisplayShow>
          )
        }
      
        
    </Container>
  )
};

export default LandingPage;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
/* font-family: poppins; */
position: relative;
`;

const DisplayShow = styled.div`
    width: 20%;
    height: 60px;
    background: #fff;
    position: fixed;
    bottom: 10px;
    border-radius: 5px;
    left: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation: bounceInUp; 
    animation-duration: 2s;
    z-index: 999;
    padding: 10px;

    h5 {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    span {
      font-family: 'Times New Roman', Times, serif;
    }

  @media Screen and (max-width: 768px){
    width: 90%;
}
@media Screen and (max-width: 425px){
    width: 70%;
    /* justify-content: center; */
}
`