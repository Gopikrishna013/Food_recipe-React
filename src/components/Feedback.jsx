import React, { useState } from 'react';
import '../Style/feedback.css';
import Button from 'react-bootstrap/Button';

function Feedback() {
    const [formData, setFormData] = useState({
        email: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
       
        setErrors({
            ...errors,
            [name]: ''
        });
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if email and feedback are empty
        if (!formData.email.trim() || !formData.description.trim()) {
            setErrors({ general: '*Please enter all the required information..!' });
            return;
        }

        setErrors({});

        alert('Your Feedback Saved successfully!');
    };

    function handleKeyPress(field) {
        setErrors({ ...errors, [field]: '' }); 
         }
    

    return (
        <div className='fb-main'>
            <p className='fb-p'>Tell us How was <i className='fb-i'> your experience..!</i></p>

            <div className='fb-sub'>
                <h2 className='fb-h2'>Feedback </h2>

                <form onSubmit={handleSubmit}>
                    <input className='fb-form' type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' onKeyPress={() => handleKeyPress('email')}/><br />
                    {errors.email && <span className='msg-1'>{errors.email}</span>}<br />

                    <textarea className='fb-desc' name='description' value={formData.description} onChange={handleChange} onKeyPress={() => handleKeyPress('general')}/><br />

                    {errors.general && <span className='msg-1'>{errors.general}</span>}<br />

                    <Button className='fb-btnn' variant="primary" type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default Feedback;














// import React from 'react'

// import '../Style/feedback.css'
// import Button from 'react-bootstrap/Button';

// function Feedback() {
//   const [formData, setFormData] = useState({
//     email: '',
//     description: ''
// });

// const [errors, setErrors] = useState({});

// const handleChange = (event) => {
//     const { name, value } = event.target;
//     // Clear the error message for the current input field
//     setErrors({
//         ...errors,
//         [name]: ''
//     });
//     setFormData({
//         ...formData,
//         [name]: value
//     });
// };

// const handleSubmit = (event) => {
//     event.preventDefault();

//     // Check if email and feedback are empty
//     if (!formData.email.trim() || !formData.description.trim()) {
//         setErrors({ general: 'Please enter your email and feedback.' });
//         return;
//     }

//     // Clear any previous errors
//     setErrors({});

//     // If there are no errors, proceed with form submission
//     alert('Form submitted successfully!');
// };

// function handleKeyPress(field) {
//     setErrors({ ...errors, [field]: '' }); 
//      }




//   return (
//     <div className='fb-main'>
     
//       <p className='fb-p'>Tell us How was <i className='fb-i'> your experience..!</i></p>
      
//       <form onSubmit={handleSubmit} className='fb-sub'>
//       <h2 className='fb-h2'>Feedback </h2>

//       <input className='fb-form' type='email' placeholder='Enter your email'></input> <br/>

//       <textarea  className='fb-desc'/> <br/>

//       <Button className='fb-btnn' variant="primary">Submit</Button>

//       </form>


//     </div>
//   )
// }

// export default Feedback
