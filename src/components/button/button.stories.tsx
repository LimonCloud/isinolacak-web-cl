import React from "react";
import {
    Story,
    Meta
} from "@storybook/react";
import Button from "./button";
import IButtonProps from "./button.props";
import {
    ChevronRightIcon,
    ClearIcon
} from "../../assets/svgr"; 
import {
    IIOCoreIconPropsType 
} from "../../types";

export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        docs: {
            description: {
                component: "Welcome to N Button page."
            }
        }
    },
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["small" , "medium" , "large" , "xSmall"],
            },
        },
        variant: {
            control: {
                type: "select",
                options: ["filled", "outline", "ghost"]
            }
        },
        disabled: {
            control: "boolean"
        },
        spreadBehaviour: {
            control: {
                type: "select",
                options: ["free", "baseline", "stretch"]
            }
        },
        icon: {
            mapping: {
                "undefined": undefined,
                "chevronRightIcon": ({
                    color,
                    size
                }: IIOCoreIconPropsType) => <ChevronRightIcon
                    color={color}
                    size={size}
                />,
                "clearIcon": ({
                    color,
                    size
                }: IIOCoreIconPropsType) => <ClearIcon
                    color={color}
                    size={size}
                />
            },
            control: {
                type: "select",
                options: ["undefined", "chevronRightIcon", "clearIcon"]
            }
        },
        iconDirection: {
            control: {
                type: "select",
                options: ["left", "right"]
            }
        }
    },
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Icon = Template.bind({
});
Icon.args = {
    title: "Button"
};