// import PropTypes from 'prop-types';
import { FidgetSpinner } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.fidgetSpinner}>
      <FidgetSpinner
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#3f51b5"', '#3f51b5"', '#3f51b5"']}
        backgroundColor="#3f51b5"
      />
      Loading...
    </div>
  );
}
