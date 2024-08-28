import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const formData = useSelector(state => state.form.formData);

    return (
        <nav className="navbar">
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
            </ul>
            <div className="welcome-container">
                <h3 className="welcome-message">Bienvenido {formData.username}: {formData.email}</h3>
            </div>

        </nav>
        
    );
};

export default Navbar;