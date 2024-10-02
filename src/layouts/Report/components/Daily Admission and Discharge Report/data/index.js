import MDTypography from "components/MDTypography";

export default function data() {
  const columns = [
    { Header: "Ward", accessor: "ward", width: "10%", align: "left" },
    { Header: "Total Bed", accessor: "totalBed", width: "33.33%", align: "left" },
    { Header: "Occupied Bed", accessor: "occupiedBeds", width: "33.33%", align: "left" },
    { Header: "Vacant Beds", accessor: "vacantBeds", width: "33.33%", align: "left" },
    { Header: "Seriously Ill", accessor: "seriouslyIll", width: "50%", align: "left" },
    { Header: "Critically Ill", accessor: "criticallyIll", width: "50%", align: "left" },
    { Header: "Expired", accessor: "expired", width: "33.33%", align: "left" },
    { Header: "Discharged", accessor: "discharged", width: "33.33%", align: "left" },
    { Header: "LAMA", accessor: "lama", width: "33.33%", align: "left" },
  ];

  const rows = [
    {
      ward: (
        <MDTypography variant="caption" fontWeight="medium">
          Female Medical Ward
        </MDTypography>
      ),
      totalBed: (
        <MDTypography variant="caption" fontWeight="medium">
          16
        </MDTypography>
      ),
      occupiedBeds: (
        <MDTypography variant="caption" fontWeight="medium">
          10
        </MDTypography>
      ),
      vacantBeds: (
        <MDTypography variant="caption" fontWeight="medium">
          6
        </MDTypography>
      ),
      seriouslyIll: (
        <MDTypography variant="caption" fontWeight="medium">
          1
        </MDTypography>
      ),
      criticallyIll: (
        <MDTypography variant="caption" fontWeight="medium">
          2
        </MDTypography>
      ),
      expired: (
        <MDTypography variant="caption" fontWeight="medium">
          0
        </MDTypography>
      ),
      discharged: (
        <MDTypography variant="caption" fontWeight="medium">
          3
        </MDTypography>
      ),
      lama: (
        <MDTypography variant="caption" fontWeight="medium">
          0
        </MDTypography>
      ),
    },
  ];

  return { columns, rows };
}
