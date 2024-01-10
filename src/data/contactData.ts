import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MailLogo,
  YoutubeLogo,
} from 'components/svg';
import { ContactDataType } from 'types/contact';

export const contactData: ContactDataType[] = [
  {
    id: 'data_mail',
    name: 'mail',
    logo: MailLogo,
    data: 'igor2008_11@hotmail.com',
    url: 'mailto:igor2008_11@hotmail.com',
  },
  {
    id: 'data_facebook',
    name: 'facebook',
    logo: FacebookLogo,
    data: '',
    url: 'https://www.facebook.com/IgorPRI1/',
  },
  {
    id: 'data_linkedin',
    name: 'linkedin',
    logo: LinkedinLogo,
    data: '',
    url: 'https://www.linkedin.com/in/igorcf/',
  },
  {
    id: 'data_github',
    name: 'github',
    logo: GithubLogo,
    data: '',
    url: 'https://github.com/Kasuk1?tab=repositories',
  },
  {
    id: 'data_instagram',
    name: 'instagram',
    logo: InstagramLogo,
    data: '',
    url: 'https://www.instagram.com/yesimigori/',
  },
  {
    id: 'data_youtube',
    name: 'youtube',
    logo: YoutubeLogo,
    data: '',
    url: 'https://www.youtube.com/@gnosiophobia',
  },
];
