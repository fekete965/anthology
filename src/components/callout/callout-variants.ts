import { cva, VariantProps } from 'class-variance-authority';

export const variations = [
  'default',
  'primary',
  'success',
  'danger',
  'warning',
  'information',
] as const;

export type Variations = (typeof variations)[number];

const variant = {
  default: [
    'bg-slate-200',
    'border-slate-500',
    'text-slate-900',
    'dark:bg-slate-800',
    'dark:border-slate-900',
    'dark:text-slate-50',
  ],
  primary: [
    'bg-primary-200',
    'border-primary-500',
    'text-primary-900',
    'dark:bg-primary-800',
    'dark:border-primary-900',
    'dark:text-primary-50',
  ],
  success: [
    'bg-success-200',
    'border-success-500',
    'text-success-900',
    'dark:bg-success-800',
    'dark:border-success-900',
    'dark:text-success-50',
  ],
  danger: [
    'bg-danger-200',
    'border-danger-500',
    'text-danger-900',
    'dark:bg-danger-800',
    'dark:border-danger-900',
    'dark:text-danger-50',
  ],
  warning: [
    'bg-warning-200',
    'border-warning-500',
    'text-warning-900',
    'dark:bg-warning-800',
    'dark:border-warning-900',
    'dark:text-warning-50',
  ],
  information: [
    'bg-information-200',
    'border-information-500',
    'text-information-900',
    'dark:bg-information-800',
    'dark:border-information-500',
    'dark:text-information-50',
  ],
} as const;

export const calloutVariant = cva(
  ['p-4', 'rounded', 'border-2', 'max-w-[20rem]', 'transition-colors', 'shadow-md'],
  {
    variants: {
      variant,
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type CalloutTypes = VariantProps<typeof calloutVariant>;
