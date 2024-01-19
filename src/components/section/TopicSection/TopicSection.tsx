import { Header1 } from 'components/ui';
import classes from './topicSection.module.scss';

export const TopicSection = () => {
  return (
    <section className={classes.topicSection}>
      <Header1>What we can talk about?</Header1>
      <div className={classes.topicSection_list}>
        <div>
          <p className='small_title'>Full/Part time job</p>
          <p className='common_text'>
            I rather prefer a full time job than a part time because I enjoy
            being more attached to a team's project. I've been working as a
            freelance and part time and I don't regret nothing until now.
          </p>
        </div>
        <div>
          <p className='small_title'>Team | community | red</p>
          <p className='common_text'>
            If you want me to be a member of a team, maybe yours, we can discuss
            about it. Time is the most important requirement for me. After that,
            the attachment to the project. After all of this, let's do it!
          </p>
        </div>
        <div>
          <p className='small_title'>Free discussion</p>
          <p className='common_text'>
            I'm willing to have a short call and know each other. Sometimes we
            need to talk to someone. I know. It doesn't matter what topic it is,
            you can trust me. It is too probably we can have a good friendship.
          </p>
        </div>
      </div>
    </section>
  );
};
