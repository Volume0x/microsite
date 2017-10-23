import React from 'react'

const SignupForm = () => (
  <form
    action='//soundcoin.us16.list-manage.com/subscribe/post?u=c65898deff3b28aa061abf1e6&amp;id=fb9ffc2e71' method='post' id='mc-embedded-subscribe-form'
    name='mc-embedded-subscribe-form'
    className='f2 measure-narrow'
    target='_blank'
    noValidate
  >
    <fieldset className='cf bn ma0 pa0'>
      {/* <legend className='pa0 f4 f3-ns mb3'>Receive Email Updates</legend> */}
      <legend className='pa0 f4 f3-ns mb3'>Let's do this.</legend>
      <div className='cf'>
        <label className='clip' htmlFor='EMAIL'>Email Address</label>
        <input
          className={`
            outline-0
            f6 f5-l pa3
            blue bg-white-80
            placeholder-blue
            fl input-reset
            panton lh-solid bn
            w-100 w-75-m w-80-l
            br2 br2-ns br--top br--left-ns
          `}
          type='email'
          name='EMAIL'
          id='mce-EMAIL'
          placeholder='Your Email Address'
          required
        />
        <input
          className={`
            outline-0
            f6 f5-l pv3
            fl button-reset
            panton tc
            pointer white bn
            bg-animate bg-black-70 hover-bg-black-30
            w-100 w-25-m w-20-l
            br2 br2-ns br--bottom br--right-ns
          `}
          type='submit'
          value='Join Us'
          name='subscribe'
        />
        <div
          className='absolute'
          style={{left: -5000}}
          aria-hidden
        >
          <input
            type='text'
            name='b_c65898deff3b28aa061abf1e6_fb9ffc2e71'
            tabIndex='-1'
            value=''
          />
        </div>
      </div>
    </fieldset>
  </form>
)

export default SignupForm
