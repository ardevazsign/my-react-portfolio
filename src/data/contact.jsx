import { FaPhoneAlt, FaShareAlt } from 'react-icons/fa';
import { Socials } from '../components/Socials/Socials';

export const contactInfo = [
  {
    id: 1,
    icon: FaPhoneAlt,
    description: 'Call Me',
    child: (
      <a
        style={{
          textDecoration: 'none',
          color: 'var(--link-color)',
          fontSize: '20px',
        }}
        href="tel:+639167522487"
      >
        + 639167522487
      </a>
    ),
  },

  {
    id: 2,
    icon: FaShareAlt,
    description: 'Social Profiles',
    child: <Socials />,
  },
];
