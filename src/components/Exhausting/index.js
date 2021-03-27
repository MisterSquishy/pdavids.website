import React from 'react'
import Typist from 'react-typist';
import Confetti from 'react-confetti'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import './style.css'

export default ({
  onDone
}) => {
  return <div className='exhausting-page'>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <Confetti initialVelocityY={50} initialVelocityX={-10} confettiSource={{ x: window.innerWidth, y: window.innerHeight }} />
    <Confetti initialVelocityY={50} initialVelocityX={10} confettiSource={{ y: window.innerHeight }} />
    <Container>
      <Row>
        <Col>
          <h1 className='header'>TA-DA!!!</h1>
          <Typist cursor={{ show: false }} onTypingDone={onDone}>
            <Typist.Delay ms={3000} />
            <p>
              Oh well that's clearly too much
              </p>
            <Typist.Delay ms={500} />
            <p>
              What are we even doing here
              </p>
            <Typist.Delay ms={500} />
            <p>
              I mean clearly this site is unusable
              </p>
            <Typist.Delay ms={500} />
            <p>
              Sorry bout all this
              </p>
            <Typist.Delay ms={500} />
            <p>
              Alright fine let's just go for something more...{' '}
            </p>
            <Typist.Delay ms={500} />
            <p>
              reasonable
              </p>
            <Typist.Delay ms={1000} />
          </Typist>
        </Col>
        <Col>
          <Image
            src={`${window.location.origin}/penguin-icon.png`}
            width={250}
            className="exhausting-image" />
            <div dangerouslySetInnerHTML={{ __html: '<div style="color: #000;"><br><table style="background-color: white; text-align: center;" width="350" cellspacing="0" cellpadding="1" border="0" bgcolor="#FFFFFF"><tbody><tr><td style="background-color: #0066B3; color: white; font: 16px/1.1 Verdana, Arial, Helvetica, sans-serif;">HowManyOfMe.com</td></tr><tr><td style="border: 1px solid black;"><table style="background-color: white; text-align: center;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF"><tbody><tr><td style="padding-top: 2px;" width="120"><a href="http://howmanyofme.com" style="text-decoration: none;"><img src="http://extimg.howmanyofme.com/extimages/howmany-logo.png" alt="Logo" style="border: 1px black" width="100" height="100"></a></td><td><span style="font: 16px/1.1 Verdana, Arial, Helvetica, sans-serif; color: #000;">There are<br><img src="http://extimg.howmanyofme.com/autoimg/Fjaxsog4OlHBsvLGMZ_Zbg%2C%2C/count.png" alt="6"><br> people with <span id="hmpu">the name <a href="http://howmanyofme.com/search/?given=Peter&amp;sur=Davids" style="color: #0066B3; text-decoration: underline; font: bold 16px/1.1 Verdana, Arial, Helvetica, sans-serif;">Peter Davids</a></span> in the U.S.A.</span><br></td></tr></tbody></table><a style="color: #0066B3; text-decoration: underline; font: bold 16px/1.8 Verdana, Arial, Helvetica, sans-serif;" href="http://howmanyofme.com">How many have your name?</a></td></tr></tbody></table><br></div>' }} />
        </Col>
      </Row>
    </Container>
  </div>
}