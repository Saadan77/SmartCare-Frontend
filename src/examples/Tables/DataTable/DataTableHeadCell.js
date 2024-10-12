// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";

// Material Dashboard 2 React contexts
import { useMaterialUIController } from "../../../context";

function DataTableHeadCell({
  width = "auto", // Default width
  children,
  sorted = "none", // Default sorted value
  align = "left", // Default align value
  ...rest
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="th"
      width={width}
      py={1.5}
      px={3}
      sx={({ palette, borders }) => ({
        borderBottom: `${
          borders?.borderWidth ? borders.borderWidth[1] : "1px"
        } solid ${palette.light?.main || "#000"}`, // Fallback to black if light.main is undefined
      })}
    >
      <MDBox
        {...rest}
        position="relative"
        textAlign={align}
        color={darkMode ? "white" : "secondary"}
        opacity={0.7}
        sx={({ typography }) => ({
          fontSize: typography.xxs || "10px", // Fallback to 10px if xxs is undefined
          fontWeight: typography.fontWeightBold, // Use default if fontWeightBold is not defined
          textTransform: "uppercase",
          cursor: sorted ? "pointer" : "default",
          userSelect: sorted ? "none" : "text",
        })}
      >
        {children}
        {sorted && (
          <MDBox
            position="absolute"
            top={0}
            right={align !== "right" ? "16px" : 0}
            left={align === "right" ? "-5px" : "unset"}
            sx={{ display: "flex", alignItems: "center" }} // Center the icons vertically
          >
            {/* Up Arrow for Ascending */}
            <MDBox
              color={sorted === "asce" ? "text.primary" : "secondary"}
              opacity={sorted === "asce" ? 1 : 0.5} // Adjust opacity for clarity
              sx={{ fontSize: "20px" }} // Clear and large sorting icon
            >
              <Icon>arrow_drop_up</Icon>
            </MDBox>

            {/* Down Arrow for Descending */}
            <MDBox
              color={sorted === "desc" ? "text.primary" : "secondary"}
              opacity={sorted === "desc" ? 1 : 0.5} // Adjust opacity for clarity
              sx={{ fontSize: "20px" }} // Clear and large sorting icon
            >
              <Icon>arrow_drop_down</Icon>
            </MDBox>
          </MDBox>
        )}
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableHeadCell;
