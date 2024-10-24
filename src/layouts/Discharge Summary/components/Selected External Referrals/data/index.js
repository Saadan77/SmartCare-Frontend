// @mui material components
import MDTypography from "components/MDTypography";

export default function ExternalReferralsData() {
  const columns = [
    { Header: "Referral Type", accessor: "ReferralType", width: "20%", align: "left" },
    {
      Header: "Consultant/Speciality",
      accessor: "ConsultantSpeciality",
      width: "20%",
      align: "left",
    },
    { Header: "Room Entitlement", accessor: "RoomEntitlement", width: "20%", align: "left" },
    { Header: "Organization Unit", accessor: "OrganizationUnit", width: "10%", align: "left" },
    { Header: "Remarks", accessor: "Remarks", width: "10%", align: "left" },
    { Header: "Mode Of Transport", accessor: "ModeOfTransport", width: "10%", align: "left" },
    { Header: "Delete", accessor: "Delete", width: "10%", align: "left" },
  ];

  const rows = [
    {
      ReferralType: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      ConsultantSpeciality: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      RoomEntitlement: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      OrganizationUnit: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Remarks: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Delete: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
    },
  ];

  return { columns, rows };
}
