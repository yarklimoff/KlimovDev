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
                <a href="https://drive.google.com/file/d/1MWsbNd5uepQwOgtNNjd_5z7YXbtkZ7FA/view?usp=share_link" className="btn">Download CV</a>
        </div>
        <img className='avatar' src={avatar} alt='avatar'></img>
    </header>
  );
}