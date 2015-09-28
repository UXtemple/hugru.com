import { reducer as patterns } from './patterns';
import { reducer as shapes } from './shapes';

export default function getInitialState(panelProps) {
  return {
    patterns: patterns(),
    shapes: shapes()
  };
}
