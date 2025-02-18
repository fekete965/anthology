import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '.';

const placeholderText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia laoreet eros, id scelerisque lectus gravida eu. Proin velit metus, semper a venenatis scelerisque, hendrerit vel nulla. In ultricies urna interdum neque congue, at viverra arcu varius. Nullam faucibus ipsum eu bibendum tristique. Ut accumsan, ipsum eleifend ullamcorper eleifend, libero lorem pretium metus, placerat molestie metus massa vel nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent quis efficitur risus. Maecenas mollis rhoncus ipsum, a lobortis ligula.';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title: 'An important title',
    children: placeholderText,
  },
  parameters: {
    viewport: {
      defaultViewport: 'reset',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    variant: 'information',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};
