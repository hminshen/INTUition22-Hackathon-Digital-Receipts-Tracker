import loginIcon from './Login_Icon.svg';
import './layout.css';
const  Nav_bar: React.VFC = () => {/*Must start with captial letter*/
    return (
        <div className="nav--bar">
            <div className="backdrop">
                <div className="left-bar"/>
            </div>
            <p className="digital-receipt-system">Digital Receipt System</p>
            <h1 className="text-1">Minshen</h1>
            <div className="login-icon">
                <img src={loginIcon} />
            </div>
      </div>
    );
} 
    
export default Nav_bar /* So that others files can use this*/