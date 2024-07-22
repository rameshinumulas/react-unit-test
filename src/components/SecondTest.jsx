import React from 'react'

export default function SecondTest() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input 
            type='text'
            id='name'
          />
          <label htmlFor='Bio'>Bio</label>
          <input 
            type='textarea'
            id='Bio'
          />
        </div>
        <div>
          <label htmlFor='job-location'>Job location</label>
          <select id='job-location'>
            <option value=''>Select Country</option>
            <option value='USA'>USA</option>
            <option value='INDIA'>INDIA</option>
            <option value='CANADA'>CANADA</option>
            <option value='AUSTRALIA'>AUSTRALIA</option>
          </select>
        </div>
        <div>
          <label>
            <input type='checkbox' id='terms'/>I agree terms and conditons
          </label>
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}
