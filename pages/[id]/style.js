import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const CompanyDiv = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "6px",
  width: "80%",
  margin: "auto",
  marginTop: "-5%",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  gap: "20px",
}));

export const LogoContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SiteButton = styled(Button)(() => ({
  borderRadius: "5px",
  backgroundColor: "#5964E0",
  opacity: "0.3",
  color: "#5964E0",
  fontWeight: "700",
}));

export const CompanyName = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "700",
  color: "#19202D",
}));

export const CompanySite = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "400",
  color: "#6E8098",
}));
