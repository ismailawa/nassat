import React from 'react';
import Layout from '../../components/Layout';

function Contact() {
  return (
    <Layout>
      <div className="container min-h-screen mx-auto pt-20 relative">
        <div className="flex flex-col border-2 border-gray-200 rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6958666491446!2d8.872123150395206!3d9.875862877834258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053737ddb265447%3A0xfb2adb56580ccf31!2sNasco%20Group%20of%20Company!5e0!3m2!1sen!2sng!4v1646408475860!5m2!1sen!2sng"
            height="600"
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
        <div className="absolute top-2/3 left-1/2  bg-white border-red-400 border-2 p-6 rounded-xl shadow-md w-64">
          position me
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
