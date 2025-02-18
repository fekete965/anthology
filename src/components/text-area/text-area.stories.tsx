import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './text-area';

import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Text Area Label',
    placeholder: 'Enter some text here…',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the text area',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text area as required',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');

    await userEvent.type(textArea, 'Hello, there!');

    expect(textArea).toBeDisabled();
    expect(textArea).toHaveTextContent('');
  },
};

export const WithCount: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const count = canvas.getByTestId('length');

    const inputValue = 'Hello, World!';

    await userEvent.type(textArea, inputValue);

    expect(count).toHaveTextContent(inputValue.length.toString());
  },
};

export const LengthTooLong: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const count = canvas.getByTestId('length');

    const inputValue = 'Y' + 'o'.repeat(140) + '!';

    await userEvent.type(textArea, inputValue);

    expect(count).toHaveTextContent(inputValue.length.toString());
    expect(count).toHaveStyle({ color: 'rgba(237, 70, 86)' });
    expect(textArea).toHaveAttribute('aria-invalid', 'true');
    expect(textArea).toHaveClass('ring-danger-500');
    expect(textArea).toHaveStyle({
      'box-shadow':
        'rgb(255, 255, 255) 0px 0px 0px 0px inset, rgb(237, 70, 86) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
    });
  },
};
