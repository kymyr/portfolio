import React from "react";
import { useFormik } from "formik";
import { validation } from "../schema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Contact = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: validation,
    onSubmit,
  });

  console.log(errors);


  return (
    <div
      name="contact me"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline underline hover:decoration-white decoration-gray-600">
            Contact Me
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
              // action="https://getform.io/f/15cf0e9d-b48c-4632-9085-a46a2a0da378"
              // type="hidden" name="_gotcha" style="display:none !important"
              // action = "/contact"
              data-netlify="true" 
              netlify-honeypot="bot-field" 
              netlify
              name="contact"
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col w-full md:w-1/2"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <label htmlFor="name" className=" p-1 text-xl">
              Name
            </label>
            
            <input
              className={`"my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
              ${errors.name && touched.name ? "input-error" : ""}`}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              // className={errors.age && touched.age ? "input-error" : ""}
            />
            {errors.name && touched.name && <p className="error text-red-500">{errors.name}</p>}

            <label htmlFor="email" className="p-1 text-xl">
              Email
            </label>

            <input
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
              ${errors.email && touched.email ? "input-error" : ""}`}
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p className="error text-red-500">{errors.email}</p>}
            
            <label htmlFor="message" className="p-1 text-xl">
              Message
            </label>

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
              ${errors.message && touched.message ? "input-error" : ""}`}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.message && touched.message && <p className="error text-red-500">{errors.message}</p>}

            <button type="submit" disabled={isSubmitting} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
