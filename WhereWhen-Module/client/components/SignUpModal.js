import React from 'react';

const SignUpModal = (props) => {
  return(
    <div id="signUpModal">
      <div>
        <button>X</button>
      </div>
      <div>
        <button id="facebook">Continue with Facebook</button>
        <button id="google">Continue with Google</button>
      </div>
      <div>
        <span>or</span>
      </div>
      <div>
        <button id="email">Sign up with Email</button>
      </div>
      <div>
        <span>Already have an Airbnb account? </span>
        <span href="/login">Log in</span>
      </div>
    </div>
  )
}

export default SignUpModal;