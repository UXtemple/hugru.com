import home from './home/panel';
import pattern from './pattern/panel';
import shape from './shape/panel';

export default {
  '/': home,
  '/:patternId': pattern,
  '/:patternId/:shapeId': shape
};
