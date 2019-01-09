import React from 'react';
import styled from 'styled-components';
import ReactTextCollapse from 'react-text-collapse';

const Description = (props) => {

  const Container = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 1.5%;
    grid-template-rows: auto auto auto auto 1fr 1fr% 1fr 1fr 1fr 1fr 1fr;
    font-family: Helvetica;
  `;

  const Thecar = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: end;
    opacity: 0.65;
    font-size: 13px;
  `;

  const Company = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-left: 10px;
  `;

  const Carname = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin-left: 10px;
    font-size: xx-large;
    font-weight: bold;
    font-family: 'Abril Fatface', cursive;
  `;

  const Year = styled.span`
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    margin-top: 15px;
  `;

  const Edition = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    margin-left: 10px;
    opacity: 0.5;
  `;

  const Star = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 10px;
  `;

  const Yellow = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    color: #9370DB;
  `;

  const Trips = styled.div`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    margin-left: 100px;
  `;

  const Mpg = styled.div`
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 55px;
    margin-top: 25px;
  `;

  const Img = styled.img`
    src: url(${props => props.src});
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 10px;
    margin-top: 15px;
  `;

  const Img2 = styled.img`
    src: url(${props => props.src});
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 250px;
    margin-top: 15px;
  `;

  const Gas = styled.div`
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 290px;
    margin-top: 25px;
  `;

  const Img3 = styled.img`
    src: url(${props => props.src});
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 10px;
    margin-top: 65px;
  `;

  const Doors = styled.div`
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 58px;
    margin-top: 70px;
  `;

  const Img4 = styled.img`
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 245px;
    margin-top: 65px;
  `;

  const Seats = styled.div`
    grid-column: 2 / 3;
    grid-row: 5 / 6;
    margin-left: 295px;
    margin-top: 70px;
  `;

  const D1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 6 / 7;
    justify-self: end;
    opacity: 0.65;
    font-size: 13px;
  `;

  const D2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 6 / 7;
    margin-left: 10px;
    line-height: 1.6;
    text-align: justify;
    text-justify: inter-word;
  `;

  const B1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 7 / 8;
    justify-self: end;
    align-self: center;
    opacity: 0.65;
    font-size: 13px;
  `;

  const B2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 7 / 8;
    margin-left: 10px;
    align-self: center;
  `;

  const F1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 8 / 9;
    justify-self: end;
    opacity: 0.65;
    font-size: 13px;
  `;

  const F2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 8 / 9;
    margin-left: 52px;
    margin-top: 7px;
  `;

  const Img5 = styled.img`
    grid-column: 2 / 3;
    grid-row: 8 / 9;
    margin-left: 10px;
  `;

  const E1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 9 / 10;
    justify-self: end;
    opacity: 0.65;
    font-size: 13px;
  `;

  const E2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 9 / 10;
    margin-left: 10px;
    line-height: 1.6;
    text-align: justify;
    text-justify: inter-word;
  `;

  const Popup = styled.a`
    grid-column: 3 / 4;
    grid-row: 9 / 10;
    margin-left: 10px;
  `;

  const G1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 10 / 11;
    justify-self: end;
    opacity: 0.65;
    font-size: 13px;
  `;

  const G2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 10 / 11;
    margin-left: 10px;
    line-height: 1.6;
    text-align: justify;
    text-justify: inter-word;
  `;

  const Faq = styled.div`
    grid-column: 1 / 2;
    grid-row: 11 / 12;
    justify-self: end;
    opacity: 0.65;
    font-size: 13px;
  `;

  const Faq1 = styled.div`
    grid-column: 2 / 3;
    grid-row: 11 / 12;
    margin-left: 10px;
    line-height: 1.6;
    text-align: justify;
    text-justify: inter-word;
  `;

  return (
    <Container>
      <Thecar>THE CAR</Thecar>
      <Company>{props.car[1]+"\'s"}</Company>
      <Carname>{props.car[2]}</Carname>
      <Year>2018</Year>
      <Edition>{props.car[3]}</Edition>
      <Star>
        <Yellow className="fa fa-star"></Yellow>
        <Yellow className="fa fa-star"></Yellow>
        <Yellow className="fa fa-star"></Yellow>
        <Yellow className="fa fa-star"></Yellow>
        <span className="fa fa-star"></span>
      </Star>
      <Trips>{props.car[4] + ' trips'}</Trips>
      <Img src="http://localhost:3003/images/mpg.png" />
      <Img2 src="http://localhost:3003/images/gas.png" />
      <Mpg>{props.car[5] + ' MPG'}</Mpg>
      <Gas>{props.car[6]}</Gas>
      <Img3 src="http://localhost:3003/images/doors.png" />
      <Doors>{props.car[7] + ' doors'}</Doors>
      <Img4 src="http://localhost:3003/images/seats.png" />
      <Seats>{props.car[8] + ' seats'}</Seats>
      <D1>DESCRIPTION</D1>
      <D2>
        {`${props.car[9]}`}
        <div></div>
        <span id="trans1">{` ${props.car[17]} `}</span>
        <span id="moreD">{` ${props.car[15]} `}</span>
        <button id="btn1" onClick={(e) => props.handleMoreClick(e, 'moreD', 'btn1', 'trans1')}>More</button>
      </D2>
      <B1>BUSINESS CLASS</B1>
      <B2>{props.car[10]}</B2>
      <a href='#popup1'><img href='#popup1' src="http://localhost:3003/images/q.png"></img></a>
      <F1>FEATURES</F1>
      <F2>{props.car[11]}</F2>
      <Img5 src="http://localhost:3003/images/features.png"></Img5>
      <E1>EXTRAS</E1>
      <E2>
        {`${props.car[12]} `}
        <div></div>
        <span id="trans2">{` ${props.car[17]} `}</span>
        <span id="moreE">{` ${props.car[16]} `}</span>
        <button id="btn2" onClick={(e) => props.handleMoreClick(e, 'moreE', 'btn2', 'trans2')}>More</button>
      </E2>
      <Popup href='#popup2'><img href='#popup2' src="http://localhost:3003/images/q.png"></img></Popup>
      <G1>GUIDELINES</G1>
      <G2>
        {`${props.car[13]} `}
        <div></div>
        <span id="trans3">{` ${props.car[17]} `}</span>
        <span id="moreG">{` ${props.car[16]} `}</span>
        <button id="btn3" onClick={(e) => props.handleMoreClick(e, 'moreG', 'btn3', 'trans3')}>More</button>
      </G2>
      <Faq>FAQS</Faq>
      <Faq1>
        {`${props.car[14]} `}
        <div></div>
        <span id="trans4">{` ${props.car[17]} `}</span>
        <span id="moreF">{` ${props.car[16]} `}</span>
        <button id="btn4" onClick={(e) => props.handleMoreClick(e, 'moreF', 'btn4', 'trans4')}>More</button>
      </Faq1>
    </Container>
  )
}


export default Description;








