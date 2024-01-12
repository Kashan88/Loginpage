import React from 'react'
import "./App.css"
const App = () => {
  return (
    <section className="main">
      <div className="outer-container">
        <div className="inner-container">
          <div className="inner-top">
            <h2>Login</h2>
            <div className="input-field">
              <label htmlFor="">Email</label>
              <input type="text" placeholder='example@email.com' />
            </div>
            <div className="input-field">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Password' />
            </div>
            <p>Forget Password?</p>
          </div>
        </div>
        <div className="inner-bottom">
          <button>Sign in</button>
          <p>or continue with</p>
          <div className="main-social-icon">
            <div className="social-icon">
              <img src="Images/Google.png" alt="" />
            </div>
            <div className="social-icon">
              <img src="Images/twitter.png" alt="" />
            </div>
            <div className="social-icon">
              <img src="Images/facebook.png" alt="" />
            </div>
          </div>
          <p>don't have an account yet? <span>Registered for free</span></p>
        </div>
      </div>
    </section>
  )
}

export default App