import drawer from '../../drawer';
import swarm, { canvasElement } from './swarm';

document.body.style.overflow = 'hidden';
document.body.appendChild(canvasElement);

drawer({ swarm, canvasElement });
