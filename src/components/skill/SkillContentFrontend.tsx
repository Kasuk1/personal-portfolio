import { LazyLoadImage } from 'react-lazy-load-image-component';
import HtmlLogo from '../../assets/images/html-logo.svg';
import CssLogo from '../../assets/images/css-logo.svg';
import JsLogo from '../../assets/images/js-logo.svg';
import ReactLogo from '../../assets/images/react-logo.svg';
import AngularLogo from '../../assets/images/angular-logo.svg';

export const SkillContentFrontend = () => {
  return (
    <section className='skill-content'>
      <p>
        I love web design, but my desire to use new technologies and merge that
        aspect in the web is greater. I'm in a constant learning from the new
        technologies and I can assure you that there are a variety of options to
        develop the Front-end of your app.
      </p>
      <div>
        <h2>Skills</h2>
        <ul className='skill-list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SCSS</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>Node</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
      </div>
      <div>
        <h2 className='h2-technologies'>Technologies</h2>
        <ul className='skill-technologies'>
          <li>
            <LazyLoadImage src={HtmlLogo} alt='HTML Logo' effect='blur' />
            <p>HTML</p>
          </li>
          <li>
            <LazyLoadImage src={CssLogo} alt='CSS Logo' effect='blur' />
            <p>CSS</p>
          </li>
          <li>
            <LazyLoadImage src={JsLogo} alt='JS Logo' effect='blur' />
            <p>Javascript</p>
          </li>
          <li>
            <LazyLoadImage src={ReactLogo} alt='React Logo' effect='blur' />
            <p>React</p>
          </li>
          <li>
            <LazyLoadImage src={AngularLogo} alt='Angular Logo' effect='blur' />
            <p>Angular</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
