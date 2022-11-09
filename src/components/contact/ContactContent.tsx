import FacebookLogo from '../../assets/images/facebook-logo.svg';
import LinkedinLogo from '../../assets/images/linkedin-logo.svg';
import GitHubLogo from '../../assets/images/github-logo.svg';
import InstagramLogo from '../../assets/images/instagram-logo.svg';

import './contact-content.scss';

export const ContactContent = () => {
  return (
    <div className='container column justify-center gap-10'>
      <div className='contact-text'>
        <h2 className='contact-text__question'>
          Do you want to know something more about me or this page?
        </h2>
        <p className='contact-text__paragraph'>
          Please, don’t hesitate and just contact me through these links. Have a
          good day! ;)
        </p>
      </div>

      <div className='logos-container'>
        <a
          href='https://www.facebook.com/IgorPRI1/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={FacebookLogo} alt='' />
        </a>
        <a
          href='https://www.linkedin.com/in/igorcf/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={LinkedinLogo} alt='' />
        </a>
        <a
          href='https://github.com/Kasuk1?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <img src={GitHubLogo} alt='' />
        </a>
        <a
          href='https://www.instagram.com/yesimigori/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={InstagramLogo} alt='' />
        </a>
      </div>
    </div>
  );
};
