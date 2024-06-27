import { trigger, transition, style, animate } from '@angular/animations';
export const routingAnimation = [
  trigger('routing', [
    transition('* <=> *', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      animate('500ms', style({ opacity: 1, transform: 'translateY(0px)' })),
    ]),
  ]),
];
