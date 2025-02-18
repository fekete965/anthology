import type { ReactNode } from 'react';
import { CalloutTypes, calloutVariant } from './callout-variants';
import {
  CircleCheckIcon,
  FileWarningIcon,
  InfoIcon,
  PencilIcon,
  SkullIcon,
  TriangleAlertIcon,
} from 'lucide-react';

function getIcon(variant: CalloutTypes['variant']) {
  switch (variant) {
    case 'danger':
      return <SkullIcon size={34} className="pr-2" />;
    case 'default':
      return <FileWarningIcon size={34} className="pr-2" />;
    case 'primary':
      return <PencilIcon size={34} className="pr-2" />;
    case 'success':
      return <CircleCheckIcon size={34} className="pr-2" />;
    case 'information':
      return <InfoIcon size={34} className="pr-2" />;
    case 'warning':
      return <TriangleAlertIcon size={34} className="pr-2" />;
  }
}

type CalloutProps = CalloutTypes & {
  title: 'string';
  children: ReactNode;
};

export const Callout = ({ children, title, variant }: CalloutProps) => {
  return (
    <article className={calloutVariant({ variant })}>
      <h2 className="mb-2 flex items-center justify-start font-semibold">
        {getIcon(variant)} {title}
      </h2>
      <p>{children}</p>
    </article>
  );
};
