import MDTypography from "components/MDTypography";
import React, { useContext } from "react";
import { Icon } from "@mui/material";

export default function viewFeeStructureData() {
  //   const { patients } = useContext(PatientContext);

  const columns = [
    { Header: "Fee Structure", accessor: "FeeStructure", width: "20%", align: "left" },
    { Header: "From Date", accessor: "FromDate", width: "20%", align: "center" },
    { Header: "To Date", accessor: "ToDate", width: "20%", align: "center" },
    {
      Header: "Modify Validation Period",
      accessor: "ModifyValidationPeriod",
      width: "20%",
      align: "center",
    },
    { Header: "New Fee Group", accessor: "NewFeeGroup", width: "20%", align: "center" },
  ];

  const rows = [
    {
      FeeStructure: (
        <MDTypography variant="caption" fontWeight="medium">
          CBC Fee
        </MDTypography>
      ),
      FromDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      ToDate: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      ModifyValidationPeriod: (
        <Icon fontSize="small" className="mr-2">
          edit
        </Icon>
      ),
      NewFeeGroup: (
        <Icon fontSize="small" className="mr-2">
          add_circle
        </Icon>
      ),
    },
  ];

  return { columns, rows };
}
