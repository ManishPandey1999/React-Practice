import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
     
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      
      console.log('Response:', response.data);

      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the form. Please try again.');
    }
  };

  const renderMessage = () => {
    if (submitted) {
      if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
      } else {
        return <p>Thank you!</p>;
      }
    }
    return null;
  };

  return (
    <div className='bg-white w-[300px] absolute duration-[400ms] flex justify-center'>
    {!submitted && (
      <form onSubmit={handleSubmit}>
        <label>
          title:
          <input
            className='border border-gray-400 shadow rounded-sm px-3 py-2 w-full mb-10 focus:outline-none'
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        
        
        <label>
          body:
          <input
            className='border border-gray-400 shadow rounded-sm px-3 py-2 w-full mb'
            type="text"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </label>
        
        <button type="submit" className='mt-7 p-2 bg-gray-900 text-white rounded-lg'>Submit</button>
      </form>
    )}

      {renderMessage()}
    </div>
  );
}

export default Login;
