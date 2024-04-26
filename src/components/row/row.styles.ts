import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
    },
    leftContainer: {
        width: "100%"
    }
}, {
    name: "IOCore-Row"
}
);
export default useStyles;
