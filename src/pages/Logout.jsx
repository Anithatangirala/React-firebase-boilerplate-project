import { useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate , Link} from 'react-router-dom';
>>>>>>> 8c93487f93f65df844979daae933b88a29e386ed
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
