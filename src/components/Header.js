import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig.js';
import { Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ user }) => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    const handleSignOut = () => {
        auth.signOut().then(() => {
            console.log("User signed out");
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                navigate('/'); // Redirect to login page after showing the toast
            }, 2000); // Show the toast for 2 seconds
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };
    

    return (
        <>
            <header className="fixed-top border-bottom" >
                <div className="container-fluid">
                    <div className="row align-items-center py-2">
                        <div className="col-auto">
                            <a href="/home">
                                <img src="/images/LnF2.webp" alt="Logo" className="img-fluid" style={{ maxWidth: '200px', borderRadius:'15px'}} />
                            </a>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                
                                <input type="text" className="form-control bg-light border-0" placeholder="Search" />
                            </div>
                        </div>
                        <div className="col-auto">
                            <nav>
                                <ul className="nav">
                                    <li className="nav-item">
                                    <a className="nav-link text-center active" href="/" onClick={(e) => {
  e.preventDefault(); // Prevent the default link behavior
  window.location.href = "/"; // Redirect to the home page
}}>
  <img src="/images/home.png" alt="Home" className="d-block mx-auto" style={{ maxWidth: '20px' }} />
  <small>Home</small>
</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-center" href="#">
                                            <img src="/images/email.png" alt="Messaging" className="d-block mx-auto" style={{ maxWidth: '20px' }} />
                                            <small>Messaging</small>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-center" href="#">
                                            <img src="/images/notification.png" alt="Notifications" className="d-block mx-auto" style={{ maxWidth: '20px' }} />
                                            <small>Notifications</small>
                                        </a>
                                    </li>
                                    {/* Sign Out nav item */}
                                    <li className="nav-item">
                                        
                                            <a className="nav-link text-center" href="#" onClick={handleSignOut}>
                                                <img src="/images/logout.png" alt="Sign Out" className="d-block mx-auto" style={{ maxWidth: '20px' }} />
                                                <small>Sign Out</small>
                                            </a>
                                        
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Toast Notification */}
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
                    <Toast.Header>
                        <img src="/images/signout.png" className="rounded me-2" alt="" style={{ width: '20px' }} />
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body>User signed out successfully!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default Header;
