import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faFileAlt, faPaperPlane, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';

const Main = ({ profileImageUrl }) => {
    const [show, setShow] = useState(false);
    const [shareContent, setShareContent] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = (content) => {
      setShareContent(content);
      setShow(true);
    };
  
    const shareOnWhatsApp = (url) => {
        const encodedUrl = encodeURIComponent(url); // Encode the URL to ensure it's safe to use in a query string
        const shareText = `Check out this post: ${encodedUrl}`; // Customize the pre-filled message as needed
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      
        window.open(whatsappUrl, '_blank');
      };
  
    const [posts, setPosts] = useState([]);
    const [newPostText, setNewPostText] = useState('');
    const [newPostMedia, setNewPostMedia] = useState({ image: null, video: null, document: null });
  
    const handlePostSubmit = (event) => {
      event.preventDefault();
      if (newPostText.trim() || newPostMedia.image || newPostMedia.video || newPostMedia.document) {
        setPosts([{ id: posts.length + 1, content: newPostText, media: newPostMedia }, ...posts]);
        setNewPostText(''); // Clear the text input field after posting
        setNewPostMedia({ image: null, video: null, document: null }); // Reset media inputs after posting
      }
    };
  
    const handleFileChange = (event, type) => {
      setNewPostMedia(prevState => ({ ...prevState, [type]: event.target.files[0] }));
    };
  

  return (
    <div className="container mt-4">
   
      {/* Post creation box */}
      <div className="card mb-4 shadow-sm border border-2 border-secondary">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <img src="/images/profile.ico" alt="User Avatar" className="rounded-circle me-3" style={{ width: '48px', height: '48px' }} />
            <form onSubmit={handlePostSubmit} style={{ flex: 1 }}>
              <input
                type="text"
                className="form-control form-control-lg bg-light mb-2"
                placeholder="What Did You Find?"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
              />
              {newPostMedia.image && <img src={URL.createObjectURL(newPostMedia.image)} alt="Preview" className="img-fluid mb-2" />}
              {newPostMedia.video && <video width="320" height="240" controls className="mb-2">
                <source src={URL.createObjectURL(newPostMedia.video)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>}
              {newPostMedia.document && <p className="mb-2">Document: {newPostMedia.document.name}</p>}
              <div className="d-flex justify-content-between px-3">
                <label htmlFor="postImage" className="btn  btn-outline-secondary d-flex align-items-center">
                  <FontAwesomeIcon icon={faImage} className="me-2 text-primary" />
                  <span className="d-none d-md-inline">Photo</span>
                  <input
                    id="postImage"
                    type="file"
                    accept=".jpg,.png,.jpeg"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, 'image')}
                  />
                </label>
                <label htmlFor="postVideo" className="btn btn-outline-secondary d-flex align-items-center">
                  <FontAwesomeIcon icon={faVideo} className="me-2 text-success" />
                  <span className="d-none d-md-inline">Video</span>
                  <input
                    id="postVideo"
                    type="file"
                    accept=".mp4,.mkv,.avi"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, 'video')}
                  />
                </label>
                <label htmlFor="postDocument" className="btn btn-outline-secondary d-flex align-items-center">
                  <FontAwesomeIcon icon={faFileAlt} className="me-2 text-warning" />
                  <span className="d-none d-md-inline">Document</span>
                  <input
                    id="postDocument"
                    type="file"
                    accept=".pdf,.docx,.xlsx"
                    style={{ display: 'none' }}
                    onChange={(e) => handleFileChange(e, 'document')}
                  /></label>
              </div>
              <button type="submit" className="btn btn-primary mt-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                <span className="d-none d-md-inline">Post</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="mb-4" />

      {/* Posts feed */}
      {posts.map((post) => (
        <div key={post.id} className="card mb-4">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <img src="/images/profile.ico" alt="User Avatar" className="rounded-circle mr-3" style={{ width: '48px', height: '48px' }} />
              <div>
                <h5 className="card-title mb-0">User Name</h5>
                <small className="text-muted">Posted moments ago</small>
              </div>
            </div>
            <p className="card-text">{post.content}</p>
            {post.media.image && <img src={URL.createObjectURL(post.media.image)} alt="Post content" className="img-fluid mb-3" />}
            {post.media.video && <video width="320" height="240" controls className="mb-3">
              <source src={URL.createObjectURL(post.media.video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>}
            {post.media.document && <a href={URL.createObjectURL(post.media.document)} target="_blank" rel="noopener noreferrer">View Document</a>}
            <div className="d-flex justify-content-between">
              <button className="btn btn-light"><FontAwesomeIcon icon={faComment} className="mr-2" /> Contact Now!</button>
              <button className="btn btn-light" onClick={() => handleShow(post.content)}>
                <FontAwesomeIcon icon={faShare} className="mr-2" /> Share
              </button>
            </div>
          </div>
        </div>
      ))}

     {/* Share Modal */}
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{shareContent}</p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-success" onClick={() => shareOnWhatsApp(shareContent)}>
              Share on WhatsApp
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Main;
