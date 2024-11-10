import css from './Home.module.css';
import homeImage from '../../images/image1.jpg';
import { Socials } from '../Socials/Socials';
import { homeDetails } from '../../data/home';
import DownloadButton from '../dowloadCv/DownloadButton';
import ViewCv from '../ViewCv/ViewCv';

export const Home = () => {
  const { name, position, country } = homeDetails;
  const cvUrl = 'https://ardevazsign.github.io/OwenSaavedraCv/';

  return (
    <div className={css.homeContainer}>
      <div className={css.homeDetails}>
        <h1 className={css.homeName}>{name}</h1>
        <p className={css.homeText}>
          I am a {position} from {country}
        </p>
        {/* Social Links Component */}
        <div className={css.socialHolder}>
          <Socials />
        </div>
        <div className={css.viewResumeBtn}>
          <ViewCv cvUrl={cvUrl} />
        </div>
        <div className={css.downloadBtnHolder}>
          <DownloadButton />
        </div>
      </div>

      <img
        className={css.homeImage}
        src={homeImage}
        alt={name}
        width="380"
        height="400"
      />
    </div>
  );
};
