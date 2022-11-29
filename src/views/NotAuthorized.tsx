// ** React Imports
import { Link } from 'react-router-dom';

// ** Reactstrap Imports
import { Button } from 'reactstrap';

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin';

// ** Styles
import '@styles/base/pages/page-misc.scss';

const NotAuthorized = () => {
  // ** Hooks
  const { skin } = useSkin();

  const illustration =
      skin === 'dark' ? 'not-authorized-dark.svg' : 'not-authorized.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default;
  return (
    <div className='misc-wrapper'>
      <Link className='brand-logo' to='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='104.348'
          height='43.838'
          viewBox='0 0 104.348 43.838'
        >
          <g transform='translate(15031.348 -2976.162)'>
            <path
              d='M-980.567-122.951h-6.262l7.268-15.527-8.247-16.779h6.381l4.971,10.4,4.763-10.4h6.288l-15.161,32.305Zm26.057-10.008h0a11.147,11.147,0,0,1-8.181-3.066,11.031,11.031,0,0,1-3.08-8.155,11.692,11.692,0,0,1,2.975-8.272,10.278,10.278,0,0,1,7.854-3.2h.115a12.979,12.979,0,0,1,2.887.326,18.381,18.381,0,0,1,3.222,1.161l.483.209v6.277l-1.239-.783a10.05,10.05,0,0,0-5.282-1.822,4.956,4.956,0,0,0-3.813,1.652,5.992,5.992,0,0,0-1.54,4.332,5.74,5.74,0,0,0,1.644,4.371,6.211,6.211,0,0,0,4.541,1.6,12.6,12.6,0,0,0,5-1.278l1.135-.509v5.78l-.522.2A17.716,17.716,0,0,1-954.509-132.959Zm42.143-.052a10.4,10.4,0,0,1-5.884-1.526,11,11,0,0,1-3.588-4.032,12.272,12.272,0,0,1-1.344-5.819,11.627,11.627,0,0,1,2.831-8.089,9.727,9.727,0,0,1,7.424-3.171,8.968,8.968,0,0,1,7.071,3.105,12.126,12.126,0,0,1,2.6,8.1v1.305h-14.208a5.035,5.035,0,0,0,1.617,3.262,5.657,5.657,0,0,0,4.1,1.5,11.314,11.314,0,0,0,1.759-.137,4.972,4.972,0,0,0-.376,1.907,5,5,0,0,0,1.21,3.262A22.8,22.8,0,0,1-912.366-133.011Zm-.548-17.549a4.142,4.142,0,0,0-3,1.083v.014a4.985,4.985,0,0,0-1.344,2.309h8.324a3.878,3.878,0,0,0-1.109-2.349A3.8,3.8,0,0,0-912.914-150.56Zm-26.369,17.249h-5.623V-165.8h5.623v12.069a8.37,8.37,0,0,1,5.325-1.919h.227a7.51,7.51,0,0,1,3.972,1.136,6.945,6.945,0,0,1,2.714,3.157,14.558,14.558,0,0,1,.848,5.65v12.394h-5.637v-13.374a4.91,4.91,0,0,0-.914-3.091A2.749,2.749,0,0,0-935-150.835h-.01a4.051,4.051,0,0,0-2.077.574,9.824,9.824,0,0,0-2.192,1.892v15.057Zm-52.41-.294h-5.368v-28.234h-9.658v-4.6h24.684v4.6h-9.658v28.233Z'
              transform='translate(-14024.629 3142.604)'
              fill='#03a8a2'
            />
            <path
              d='M1.742,2h71.37V4.023H0Z'
              transform='translate(-15001 3015.977)'
              fill='#03a8a2'
            />
            <circle
              cx='3'
              cy='3'
              r='3'
              transform='translate(-14933 3003)'
              fill='#03a8a2'
            />
          </g>
        </svg>
      </Link>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>You are not authorized! 🔐</h2>
          <p className='mb-2'>
            The Webtrends Marketing Lab website in IIS uses the default IUSR
            account credentials to access the web pages it serves.
          </p>
          <Button
            tag={Link}
            color='primary'
            className='btn-sm-block mb-1'
            to={'/'}
          >
            Back to Home
          </Button>
          <img className='img-fluid' src={source} alt='Not authorized page' />
        </div>
      </div>
    </div>
  );
};
export default NotAuthorized;
