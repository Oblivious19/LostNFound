import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '.././firebaseConfig.js'; // Adjust path as necessary
import { signInWithPopup } from 'firebase/auth';

import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          navigate('/home'); // Redirects to home page after successful sign-in using navigate
        }
      });

      return () => unsubscribe();
    }, [navigate]);

    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, provider);
          console.log('Success');
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <div className="container-fluid px-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/images/LnF2.webp" alt="Lost and Found" className="logo" style={{ maxWidth: '150px', height: 'auto' }} />
                    </a>
                    <div className="ms-auto">
                        <Link to="/home" className="btn btn-outline-primary">View Now!</Link>
                    </div>
                </div>
            </nav>
            <section className="d-flex flex-column align-items-center justify-content-center vh-90">
                <div className="text-center mb-5">
                    <h1 className="display-4 text-primary bold">Welcome to your Finding Community</h1>
                </div>
                <div className="text-center">
                    <img src="/images/bgLnF.jpeg" alt="Hero" className="img-fluid spin-image" style={{ maxWidth: '200px' }} />
                    <img src="/images/inLnF.jpeg" alt="Hero" className="inner-image img-fluid" style={{ maxWidth: '100px' }} />
                </div>
                <div className="mt-5">
                    <button onClick={signInWithGoogle} className="btn btn-light border d-flex align-items-center">
                        <img src="/images/Google.webp" alt="Google logo" style={{ width: '50px', marginRight: '10px' }} />
                        Sign in with Google
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Login;