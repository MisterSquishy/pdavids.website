import React from 'react';
import Typist from 'react-typist';

export default ({
  onDone
}) => {
  return <>
    <h1>
      Welcome
    </h1>
    <p>
      This is my site
    </p>
    <Typist avgTypingDelay={50} cursor={{show: false}} onTypingDone={onDone}>
      <Typist.Delay ms={2000} />
      <p>
        It...{' '}
        <Typist.Delay ms={500} />
        uh...{' '}
        <Typist.Delay ms={500} />
        doesn't look very good
      </p>
      <Typist.Delay ms={1000} />
      <p>
        I should add some panache
      </p>
      <Typist.Delay ms={1000} />
      <p>
        .
        <Typist.Delay ms={500} />
        .
        <Typist.Delay ms={500} />
        .
        <Typist.Delay ms={1000} />
      </p>
    </Typist>
  </>
}