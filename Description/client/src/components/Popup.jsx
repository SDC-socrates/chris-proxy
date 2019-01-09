import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 15% auto 15% auto 15% auto 15% auto;
  font-family: Helvetica;
`;

const Check = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin-top: 15px;
`;

const H1 = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin-top: 20px;
  font-weight: bold;
`;

const Info1 = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const Check2 = styled.img`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  margin-top: 15px;
`;

const H2 = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  margin-top: 20px;
  font-weight: bold;
`;

const Info2 = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`;

const Check3 = styled.img`
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  margin-top: 15px;
`;

const H3 = styled.div`
  grid-column: 2 / 3;
  grid-row: 5 / 6;
  margin-top: 20px;
  font-weight: bold;
`;

const Info3 = styled.div`
  grid-column: 2 / 3;
  grid-row: 6 / 7;
`;

const Check4 = styled.img`
  grid-column: 1 / 2;
  grid-row: 7 / 8;
  margin-top: 15px;
`;

const H4 = styled.div`
  grid-column: 2 / 3;
  grid-row: 7 / 8;
  margin-top: 20px;
  font-weight: bold;
`;

const Info4 = styled.div`
  grid-column: 2 / 3;
  grid-row: 8 / 9;
`;

const Popup = (props) => {
  return (
    <div>
      <div id="popup1" className="overlay">
        <div className="popup">
          <h1 className="heading">BUSINESS CLASS</h1>
          <a className="close" href="#">&times;</a>
          <Container className="content">
            <Check src="http://localhost:3003/images/check.png"></Check>
            <H1>Reliable & responsive</H1>
            <Info1>These hosts have a proven track record, with multiple trips under their belts, quick response times, and strong ratings.</Info1>
            <Check2 src="http://localhost:3003/images/check.png"></Check2>
            <H2>No fuzz</H2>
            <Info2>These hosts have high approval and commitment rates for every booking they receive.</Info2>
            <Check3 src="http://localhost:3003/images/check.png"></Check3>
            <H3>Curbside convenience</H3>
            <Info3>Hosts will drop off the car curbside at the airport, saving you time and hassle.</Info3>
            <Check4 src="http://localhost:3003/images/check.png"></Check4>
            <H4>Fresh off the lot</H4>
            <Info4>All Business Class cars are new model years, with in-vehicle features convenient for busy business travelers.</Info4>
          </Container>
        </div>
      </div>
      <div id="popup2" className="overlay">
        <div className="popup">
          <h1 className="heading">EXTRAS</h1>
          <a className="close" href="#">&times;</a>
          <div>Make your trip unique by adding any of these optional Extras offered by this host.</div>
          <Container className="content">
            <Check src="http://localhost:3003/images/check.png"></Check>
            <H1>Add something extra</H1>
            <Info1>You’ll have the option to add Extras during checkout. After booking, message your host if you have any questions or special requests.</Info1>
            <Check2 src="http://localhost:3003/images/check.png"></Check2>
            <H2>Treat them like your own</H2>
            <Info2>Treat Extras like they’re your own, since they’re not covered by your protection plan.</Info2>
            <Check3 src="http://localhost:3003/images/check.png"></Check3>
            <H3>Plans changed?</H3>
            <Info3>You can remove an Extra from your trip before it starts by viewing your trip details.</Info3>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Popup;








