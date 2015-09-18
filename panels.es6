import home from './home/panel';
import pattern from './pattern/panel';

export default {
  '/': home,
  '/:patternId': pattern
};
