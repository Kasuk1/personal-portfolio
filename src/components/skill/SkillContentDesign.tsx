import { LazyLoadImage } from 'react-lazy-load-image-component';
import FigmaLogo from '../../assets/images/figma-icon.svg';
import AdobeXDLogo from '../../assets/images/adobexd-icon.svg';
import InVisionLogo from '../../assets/images/invision-icon.svg';
import PhotoshopLogo from '../../assets/images/photoshop-icon.svg';

export const SkillContentDesign = () => {
  return (
    <section className='skill-content'>
      <p>
        The final aspect of a web page needs to be thought and plasmed. I wasn’t
        conscious about this and due to that I’m constantly learning the current
        theories and technologies used to get the best aspect possible and apply
        the best design practices to a web page.
      </p>
      <div>
        <h2>Skills</h2>
        <ul className='skill-list'>
          <li>UI/UX</li>
          <li>Template Design</li>
          <li>Prototype</li>
          <li>Wireframe</li>
          <li>Low Fidelity Design</li>
          <li>High Fidelity Design</li>
        </ul>
      </div>
      <div>
        <h2 className='h2-technologies'>Technologies</h2>
        <ul className='skill-technologies'>
          <li>
            <LazyLoadImage src={FigmaLogo} alt='Figma Logo' effect='blur' />
            <p>Figma</p>
          </li>
          <li>
            <LazyLoadImage src={AdobeXDLogo} alt='Adobe Logo' effect='blur' />
            <p>Adobe XD</p>
          </li>
          <li>
            <LazyLoadImage
              src={InVisionLogo}
              alt='InVision Logo'
              effect='blur'
            />
            <p>InVision Studio</p>
          </li>
          <li>
            <LazyLoadImage
              src={PhotoshopLogo}
              alt='Photoshop Logo'
              effect='blur'
            />
            <p>Photoshop</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
