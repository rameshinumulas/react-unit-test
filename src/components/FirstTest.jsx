import React from 'react'

export default function FirstTest() {
  return (
    <div data-testid="first_div">
      <h2>this is first test</h2>
      <h1>handle Check Heading One</h1>
      <h1>Hello, world!</h1>
      <button>Click me</button>
      <input type="text" placeholder="Enter your username" />
      <input type="password" placeholder="Enter your password" />
      <img src="logo.png" alt="Logo" />
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
    </div>
  )
}
