import { Header1, PointerText } from 'components/ui';
import { experienceData } from 'data/experienceData';
import { ArrowUpRightFromLogo } from 'components/svg';
import classes from './cvSection.module.scss';

export const CVSection = () => {
  return (
    <div className={classes.cvSection}>
      <Header1>Curriculum Vitae</Header1>
      <div className={classes.cvSection_list}>
        {experienceData.map(({ date, role, companyName, pageUrl }) => (
          <div className={classes.cvSection_list_field} key={companyName}>
            <p className='small_title'>{date}</p>
            <PointerText
              underlined={false}
              hiddenText={
                <>
                  <ArrowUpRightFromLogo fill='black' width={10} height={10} />{' '}
                  Visit website
                </>
              }
            >
              <a href={pageUrl} target='_blank'>
                <p className='small_title'>{role}</p>
                <p className='common_text'>
                  <strong>{companyName}</strong>
                </p>
              </a>
            </PointerText>
          </div>
        ))}
      </div>
    </div>
  );
};
