import styled from 'styled-components';
import HeroContainer from '../assets/game.jpg';

export const DirectionText = styled.div`
font-family: var(--headings-font-family);
font-size: 1rem;
color: black;
border-radius: 10px;
margin-top: 1rem;
padding: 10px 5px;
width: 100%;
animation: fadeIn 4s; 
&.instructions {
  display: block;
}

@keyframes fadeIn {
0% { opacity: 0; }
100% { opacity: 1; }
}
`

export const DescriptionText = styled.div`
font-family: var(--headings-font-family);
  font-weight: 100;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: center;
  font-size: 1.2rem;
  color:black;
border-radius: 10px;
margin-top: 1rem;
padding: 10px 5px;
width: 100%;
animation: fadeIn 2s; 
&.instructions {
  display: block;
}

@keyframes fadeIn {
0% { opacity: 0; }
100% { opacity: 1; }
}
`

export const StyledContainer = styled.div`
  background-image: url(${HeroContainer});
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  position: relative;
  min-height: 100vh;
  max-width: 100%;
  align-items: center;
  text-align: center;
`;

export const Wrapper = styled.div`
  background-color: rgba(145, 132, 115, 0.7);
  max-width: 60%;
  margin: 2rem auto;
  padding: 5rem;

  @media (min-width: 1440px) {
    max-width: 50rem;
  }
`;

export const DirectionWrapper = styled.div`
border: dotted;
color: black;
border-radius: 20px;
margin: 10px;
padding: 10px;
display: flex;
align-items: center;
flex-direction: column;
`
