import avatar from '../../images/avatar.svg';
import './style.css';

export default function Header() {
  return (
    <header className="header">
        <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Yaroslav</em></strong><br></br>
                    a frontend developer
                </h1>
                <a href="https://drive.google.com/file/d/1kftT2UVx2eoMj7M-w4onCGiudHTQaXmh/view?usp=sharing" className="btn">Download CV</a>
        </div>
        <img className='avatar' src={avatar} alt='avatar'></img>
    </header>
  );
}