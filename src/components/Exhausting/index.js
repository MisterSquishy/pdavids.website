import React, { useEffect, useState } from 'react'
import Typist from 'react-typist';
import Confetti from 'react-confetti'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import axios from 'axios'

import './style.css'

export default ({
  onDone
}) => {

  const [ latestXkcd, setLatestXkcd ] = useState('')

  useEffect(() => {
    axios.get('https://xkcd.now.sh/?comic=latest').then(({ data }) => {
      debugger
      setLatestXkcd(data.img)
    })
  }, [])

  return <div className='exhausting-page'>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <Confetti initialVelocityY={50} initialVelocityX={-10} confettiSource={{ x: window.innerWidth, y: window.innerHeight }}/>
    <Confetti initialVelocityY={50} initialVelocityX={10} confettiSource={{ y: window.innerHeight }}/>
    <Container>
      <Row>
        <Col>
          <h1 className='header'>TA-DA!!!</h1>
          <Typist cursor={{show: false}} onTypingDone={onDone}>
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
          { latestXkcd && <Image src={ latestXkcd } /> }
        </Col>
      </Row>
    </Container>
  </div>
}