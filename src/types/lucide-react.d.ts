import 'lucide-react';

declare module 'lucide-react' {
  import type { ComponentType, SVGProps } from 'react';

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export const Instagram: ComponentType<IconProps>;
  export const Twitter: ComponentType<IconProps>;
  export const Youtube: ComponentType<IconProps>;
  export const Music: ComponentType<IconProps>;
  export const Apple: ComponentType<IconProps>;
  export const Cloud: ComponentType<IconProps>;
  export const Mail: ComponentType<IconProps>;
  export const Send: ComponentType<IconProps>;
  export const Calendar: ComponentType<IconProps>;
  export const MapPin: ComponentType<IconProps>;
  export const Ticket: ComponentType<IconProps>;
  export const Play: ComponentType<IconProps>;
  export const ArrowRight: ComponentType<IconProps>;
  export const ExternalLink: ComponentType<IconProps>;
  export const Menu: ComponentType<IconProps>;
  export const X: ComponentType<IconProps>;
  export const ChevronRight: ComponentType<IconProps>;
  export const CheckCircle: ComponentType<IconProps>;
}
