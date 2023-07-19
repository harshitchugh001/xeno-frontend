import React, { useState } from 'react';
import phonebookImage from '../photos/phonebook.png';
import Register from './register';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="#contacts" className="flex items-center">
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
              className="h-8 mr-3 text-slate-500"
              alt=""
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-500">
              Contacts App
            </span>
          </a>
          <div className="flex items-center">
            <button
              className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={openRegisterModal}
            >
              Join Now
            </button>
          </div>
        </div>
      </nav>

      <div className="w-[90vw] mx-auto text-center">
        <section className="bg-gray-100 text-white py-2 mt-4 w-full sm:h-[85vh] min:h-screen relative">
          <div className="container mx-auto flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mt-16">
              <h1 className="text-5xl font-bold mb-4 text-gray-500">
                Welcome to Contacts App
              </h1>
              <p className="text-xl mb-4 text-gray-400">
                All your contacts in one place
              </p>
              <button
                className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={openRegisterModal}
              >
                Click Join Now to Get started
              </button>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                style={{
                  marginTop: '100px',
                  width: '400px',
                  height: '400px',
                }}
                alt="Unicorn"
                src={phonebookImage}
              />
            </div>
          </div>
        </section>
      </div>

      {isRegisterOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-8 w-1/2">
            <Register closeModal={closeRegisterModal} />
          </div>
        </div>
      )}
    </div>
  );
}
