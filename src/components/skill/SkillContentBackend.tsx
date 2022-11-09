import { LazyLoadImage } from 'react-lazy-load-image-component';
import NodeLogo from '../../assets/images/node-logo.svg';
import ExpressLogo from '../../assets/images/express-logo.svg';
import MongodbLogo from '../../assets/images/mongodb-logo.svg';

export const SkillContentBackend = () => {
  return (
    <section className='skill-content'>
      <p>
        It's always important be connected to a database and keep all your
        information stored. I learned the importance of this in my career and
        self-learning and I have knowledge about how a whole system interacts.
        This is not my strength, always learning though.
      </p>
      <div>
        <h2>Skills</h2>
        <ul className='skill-list'>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div>
        <h2 className='h2-technologies'>Technologies</h2>
        <ul className='skill-technologies'>
          <li>
            <LazyLoadImage src={NodeLogo} alt='Node Logo' effect='blur' />
            <p>Node</p>
          </li>
          <li>
            <LazyLoadImage src={ExpressLogo} alt='Express Logo' effect='blur' />
            <p>Express</p>
          </li>
          <li>
            <LazyLoadImage src={MongodbLogo} alt='MongoDB Logo' effect='blur' />
            <p>MongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
