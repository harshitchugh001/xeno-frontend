import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useJwt } from 'react-jwt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Activate() {
  const { token } = useParams();
  const { decodedToken } = useJwt(token);
  const decodedName = decodedToken?.userName;

  const [values, setValues] = useState({
    userName: '',
    token: '',
    show: true,
  });

  const { userName } = values;

  useEffect(() => {
    if (token) {
      setValues({ ...values, userName: decodedName, token });
    }
  }, [token, decodedName]);

  const clickSubmit = async (event) => {
    event.preventDefault();

    await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/account-activation`,
      data: { token },
    })
      .then((response) => {
        console.log('ACCOUNT ACTIVATION', response);
        setValues({ ...values, show: false });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log('ACCOUNT ACTIVATION ERROR', error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  return (
    <div>
      <ToastContainer />
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
        </div>
      </nav>
      <div className="text-center">
        <h1 className="p-5 text-3xl font-bold">
          Hey {userName}, Ready to activate your account?
        </h1>
        <button
          className="btn btn-primary py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          onClick={clickSubmit}
        >
          Activate Account
        </button>
      </div>
    </div>
  );
}
