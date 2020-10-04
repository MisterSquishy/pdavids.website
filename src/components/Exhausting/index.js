import React from 'react'
import Typist from 'react-typist';
import Confetti from 'react-confetti'

import './style.css'

export default ({
  onDone
}) => {
  return <>
    <Confetti initialVelocityY={50} confettiSource={{ x: window.innerWidth/2, y: window.innerHeight }}/>
    <h1>
      TA-DA!
    </h1>
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
        <Typist.Delay ms={500} />
        straightforward
      </p>
      <Typist.Delay ms={1000} />
    </Typist>
  </>
}