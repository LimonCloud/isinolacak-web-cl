import React from 'react';
import {
    Meta,
    Story
} from '@storybook/react';
import SelectBox from './selectBox';
import {
    ISelectBoxProps
} from './selectBox.props';

export default {
    title: 'Components/SelectBox',
    component: SelectBox,
    argTypes: {
        spreadBehaviour: {
            control: {
                type: "select",
                options: [
                    "baseline",
                    "stretch",
                    "free"
                ]
            }
        },
        disabled: {
            control: {
                type: "boolean"
            }
        },
        multiSelect: {
            control: {
                type: "boolean"
            }
        },
        isClick: {
            control: {
                type: "boolean"
            }
        }
    },
} as Meta;

const Template: Story<ISelectBoxProps> = (args) => <SelectBox {...args} />;

export const Default = Template.bind({
});
Default.args = {
    onOverlayPress: () => {
        alert("Overlay pressed.");
    },
    title: 'Title',
};
