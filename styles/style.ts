import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const CompanyDiv = styled(Box)(() => ({
  borderRadius: "6px",
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
}));

export const CompanySite = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "400",
  color: "#6E8098",
}));

export const JobDiv = styled(Box)(() => ({
  borderRadius: "6px",
  width: "80%",
  margin: "auto",
  padding: "5%",
  marginTop: "5%",
}));

export const TimeContainer = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  marginTop: "4%",
}));

export const GreyText = styled(Typography)(() => ({
  color: "#6E8098",
  fontSize: "16px",
}));

export const OvalContainer = styled(Box)(() => ({
  background: "#6E8098",
  width: "4px",
  height: "4px",
  margin: "auto 0",
}));

export const PositionText = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "700",
  margin: "2% 0",
}));

export const LocationText = styled(Typography)(() => ({
  color: "#5964E0",
  fontSize: "14px",
  fontWeight: "700",
}));

export const ApplyButton = styled(Button)(() => ({
  backgroundColor: "#5964E0 ",
  padding: "10px",
  margin: "15% 0",
  color: "#FFFFFF",
  fontWeight: "700",
}));

export const Description = styled(Typography)(() => ({
  color: "#6E8098",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "26px",
}));

export const Requirements = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "700",
}));

export const ApplyButtonDiv = styled(Box)(() => ({
  borderRadius: "6px",
  padding: "5%",
  marginTop: "5%",
}));
