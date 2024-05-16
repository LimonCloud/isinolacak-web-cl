import {
    FC
} from  "react";
import Text from "../text/text";
import {
    IOCoreTheme 
} from "../../core";
import IHeaderProps from "./header.props";
import useStyles, {
    headerStyler 
} from "./header.styles";

const Header: FC<IHeaderProps> = ({
    titleVariant = "header5-semiBold",
    headerLocation = "left",
    titleColor = "primary",
    renderBottom,
    headerRight,
    customTitle,
    headerLeft,
    title,
    style
}) => {
    const classes = useStyles();

    const {
        colors,
        spaces
    } = IOCoreTheme.useContext();

    const {
        bottomContainerStyle,
        headerRightStyler,
        customTitleStyle,
        container
    } = headerStyler({
        headerLocation,
        renderBottom,
        titleColor,
        colors,
        spaces
    });

    const renderBottomContainer = () => {
        if(!renderBottom) {
            return null;
        }

        return <div
            style={bottomContainerStyle}
        >
            {renderBottom}
        </div>;
    };

    return <div
        className={
            classes.container
        }
        style={{
            ...container,
            ...style
        }}
    >
        <div className={classes.contentContainer}>
            {
                headerLeft ?
                    headerLeft()
                    :
                    !headerLeft && !headerRight ?
                        <div 
                            className={classes.headerLeftToRightNull}
                        />
                        :
                        null
            }
            {
                customTitle ?
                    customTitle
                    :
                    <Text
                        variant={titleVariant}
                        style={customTitleStyle}
                    >
                        {title}
                    </Text>
            }
            <div
                className={classes.headerRight}
                style={headerRightStyler}
            >
                {headerRight ? headerRight() : null}
            </div>
        </div>
        <div
            className={classes.container}
        >
            {renderBottomContainer()}
        </div> 
    </div>;

};
export default Header;
