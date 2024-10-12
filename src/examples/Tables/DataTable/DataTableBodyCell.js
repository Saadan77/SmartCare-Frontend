import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";

function DataTableBodyCell({ noBorder = false, align = "left", children }) {
  // Default values set in function signature
  return (
    <MDBox
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({ palette, typography, borders }) => ({
        fontSize: typography?.size?.sm || "14px", // Safely access 'sm' and provide a fallback
        borderBottom: noBorder
          ? "none"
          : `${borders?.borderWidth ? borders.borderWidth[1] : "1px"} solid ${
              palette?.light?.main || "#000"
            }`, // Safely access light.main and borders
      })}
    >
      <MDBox
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the DataTableBodyCell
DataTableBodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableBodyCell;
