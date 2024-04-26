import {
    FC
} from  "react";
import {
    LoadingIcon 
} from "../../assets/svgr";
import {
    useIOCoreTheme 
} from "../../core/context";
import ILoadingProps from "./loading.props";
import useStyles from "./loading.style";

const Loading: FC<ILoadingProps> = ({
    color = "body",
    size = 22,
    className,
    children,
    style,
    ...props
}) => {
    const {
        colors
    } = useIOCoreTheme();

    const classes = useStyles();

    return <LoadingIcon
        className={classes.container}
        color={colors[color]}
        size={size}
        {...props}
    />;
};
export default Loading;
