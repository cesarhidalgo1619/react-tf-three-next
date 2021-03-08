import React, { useState, useEffect, Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from "firebase";
import useUser from '../../../hooks/useUser';
import {  useDocument } from 'react-firebase-hooks/firestore';

import Tabs from './Tabs';

const Profile = () => {
  const user =useUser()
  var yo = firebase.auth().currentUser;
  const [value] = useDocument(
    firebase.firestore().doc("users/"+yo?.uid)
  );
  const avatar = value && value.data().avatar
  return (
    <Fragment>
     <div>Mi Perfil</div>
<div className="overflow-auto">


        <div className="fondo grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2 ">
          <div className="container mx-auto mt-24">
            <div className=" bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105 relative w-5/6 md:w-4/6  lg:w-56 xl:w-5/6 mx-auto">
              <div className="flex justify-center">
                <img
                  src={avatar}
                  alt=""
                  className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"
                />
              </div>
              <div className="mt-16 justify-center">
               
                {user &&
                 <h1 className="font-bold text-center text-3xl text-white"> 
                 {user.username}
                 </h1>
                }
               
                <p className="text-center text-sm text-white font-medium">
                  "Intenta aprender algo sobre todo y todo sobre algo." Thomas Huxley.
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <Link to="./avatar">
                  <button
                    className="w-52 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-purple-500 hover:border-purple-600 hover:bg-purple-500 hover:text-white shadow-md py-2 px-6"
                    type="submit"
                  >
                    <span className="min-w-full w-20">Cambiar de Avatar</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-25 shadow-2xl rounded-lg p-4 m-8 transition duration-200 ease-in  hover:opacity-100 transform hover:-translate-y-1 hover:scale-105 mx-8 px-4 max-w-sm">
            <div className="mb-1 tracking-wide px-4 py-4">
              <h2 className="text-white font-semibold mt-1">67 Users reviews</h2>
              <div className="border-b -mx-8 px-8 pb-3">
                <div className="flex items-center mt-1">
                  <div className=" w-1/5 text-indigo-500 tracking-tighter">
                    <span>5 star</span>
                  </div>
                  <div className="w-3/5">
                    <div className="bg-gray-300 w-full rounded-lg h-2">
                      <div className=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
                    </div>
                  </div>
                  <div className="w-1/5 text-white pl-3">
                    <span className="text-sm">51%</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-1/5 text-indigo-500 tracking-tighter">
                    <span>4 star</span>
                  </div>
                  <div className="w-3/5">
                    <div className="bg-gray-300 w-full rounded-lg h-2">
                      <div className="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                    </div>
                  </div>
                  <div className="w-1/5 text-white pl-3">
                    <span className="text-sm">17%</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-1/5 text-indigo-500 tracking-tighter">
                    <span>3 star</span>
                  </div>
                  <div className="w-3/5">
                    <div className="bg-gray-300 w-full rounded-lg h-2">
                      <div className=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
                    </div>
                  </div>
                  <div className="w-1/5 text-white pl-3">
                    <span className="text-sm">19%</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className=" w-1/5 text-indigo-500 tracking-tighter">
                    <span>2 star</span>
                  </div>
                  <div className="w-3/5">
                    <div className="bg-gray-300 w-full rounded-lg h-2">
                      <div className=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                    </div>
                  </div>
                  <div className="w-1/5 text-white pl-3">
                    <span className="text-sm">8%</span>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="w-1/5 text-indigo-500 tracking-tighter">
                    <span>1 star</span>
                  </div>
                  <div className="w-3/5">
                    <div className="bg-gray-300 w-full rounded-lg h-2">
                      <div className=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
                    </div>
                  </div>
                  <div className="w-1/5 text-white pl-3">
                    <span className="text-sm">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="absolute inset-x-0 bottom-0 w-full flex justify-center">
          <Tabs />
        </div>

      <style jsx>{`
        .fondo {
          /*
            background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
          */
          background: url('https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80');
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </Fragment>
  );
};

export default Profile;
