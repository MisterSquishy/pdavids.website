import React from 'react'

import './style.css'

export default () => {
  return <>
    <h1>Peter Davids</h1>
    <h2>Builder, problem solver</h2>
    <p>This site isn't super well maintained, check my <a href='https://github.com/MisterSquishy'>github profile</a> to see what I've been up to lately</p>
    <ul>
      <li>
        <a href='https://alldaisy.com/'>Daisy</a> -- a whole company! I built the entire <a href='https://app.alldaisy.com'>SaaS app</a> end to end
      </li>
      <li>
        <a href='https://apps.apple.com/us/app/freyr-sunset/id1605500146'>Freyr</a> -- an iPhone app that predicts sunset quality
      </li>
      <li>
        <a href='http://game.pdavids.website'>Scout</a> -- top-down RPG sandbox where you can play fetch with my childhood dog
      </li>
    </ul>
  </>
}