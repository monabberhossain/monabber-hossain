import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const ContactMe = () => {
    const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
    return (
        <div className="bg-sky-100 px-4 py-12 md:py-16 lg:py-20">
            <div className="w-[100%] lg:w-[84%] mx-auto">
                <h2 className="mb-3 text-4xl font-bold leading-loose text-center">
                    Contact With Me
                </h2>
                <div className="w-96 mx-auto">
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                id="form-input-control-last-name"
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                id="form-input-control-email"
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input
                                id="form-textarea-control-opinion"
                                type="text"
                                name="user_message"
                                placeholder="Your Message"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-danger" type="submit">
                                Send Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;