/**
 *
 * Asynchronously loads the component for Navbar
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
