import { MouseEvent, useContext } from 'react';
import { contactData } from 'data/contactData';
import { Link, RouterContext } from 'routes';
import { UIContext } from 'context';
import { MAIN_ROUTE } from 'const';
import classes from './menuOverlay.module.scss';

export const MenuOverlay = () => {
  const { closeMenuOverlay } = useContext(UIContext);
  const { to } = useContext(RouterContext);

  const handleClick = (path: string, e: MouseEvent) => {
    e.preventDefault();
    to(path);
    closeMenuOverlay();
  };

  return (
    <div id='menuOverlay' className={classes.menuOverlay}>
      <div className={classes.menuOverlay_contactList}>
        <p className='small_title'>Contact</p>
        <ul>
          {contactData.map(({ id, name, url }) => (
            <li key={id}>
              <a href={url} target='_blank'>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className={classes.menuOverlay_menu}>
        <li>
          <Link
            to={`${MAIN_ROUTE}/about`}
            onClick={(e) => handleClick(`${MAIN_ROUTE}/about`, e)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to={`${MAIN_ROUTE}/contact`}
            onClick={(e) => handleClick(`${MAIN_ROUTE}/contact`, e)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
