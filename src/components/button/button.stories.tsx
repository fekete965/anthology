import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    size: 'medium',
    variant: 'primary',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display the button',
      table: {
        disable: true,
      },
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
    },
    variant: {
      control: 'select',
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

// export const Ghost: Story = {
//   args: {
//     variant: 'ghost',
//   },
// };

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
