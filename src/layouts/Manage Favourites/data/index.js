// @mui material components
import MDTypography from "components/MDTypography";
import { Icon } from "@mui/material";

export default function FavouritesData() {
  const columns = [
    { Header: "Favourites", accessor: "Favourites", width: "33%", align: "left" },
    { Header: "Edit", accessor: "Edit", width: "33%", align: "left" },
    { Header: "Delete", accessor: "Delete", width: "33%", align: "left" },
  ];

  const rows = [
    {
      Favourites: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Edit: <MDTypography variant="caption" fontWeight="medium"></MDTypography>,
      Delete: (
        <Icon fontSize="small" className="mr-2">
          clear
        </Icon>
      ),
    },
  ];

  return { columns, rows };
}
