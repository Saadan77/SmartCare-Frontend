// @mui material components
import MDTypography from "components/MDTypography";
import { Icon } from "@mui/material";
import MDButton from "components/MDButton";

export default function MedicationsData() {
  const columns = [
    { Header: "Medication", accessor: "Medication", width: "90%", align: "left" },
    { Header: "Delete", accessor: "Delete", width: "10%", align: "left" },
  ];

  const rows = [
    {
      Medication: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Delete: (
        <MDTypography variant="caption" fontWeight="medium">
          <MDButton
            variant="gradient"
            style={{
              borderRadius: 0,
              minHeight: 0,
              backgroundColor: "#1694c4",
              color: "White",
            }}
          >
            <button type="submit" className="text-xs flex items-center">
              <Icon fontSize="small" className="mr-2">
                close
              </Icon>{" "}
              Delete
            </button>
          </MDButton>
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
