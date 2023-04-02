import { useSelector } from "react-redux";
import Filter from "@/components/Filter/Filter";
import data from "../data.json";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function Home() {
  console.log(data);
  return (
    <Box>
      <Filter />
      <AllJobsContainer>
        {data.map((item) => (
          <JobContainer
            sx={{
              width: { xs: "100%", md: "47%", lg: "30%" },
            }}
          >
            <LogoContainer
              sx={{
                backgroundColor: `${item.logoBackground}`,
              }}
            >
              <img src={item.logo} />
            </LogoContainer>
            <TimeContainer>
              <GreyText>{item.postedAt}</GreyText>
              <OvalContainer></OvalContainer>
              <GreyText>{item.contract}</GreyText>
            </TimeContainer>
            <PositionText>{item.position}</PositionText>
            <GreyText>{item.company}</GreyText>
            <LocationText>{item.location}</LocationText>
          </JobContainer>
        ))}
      </AllJobsContainer>
    </Box>
  );
}
const JobContainer = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  padding: "0 5% 5% 5%",
  borderRadius: "6px",
}));

const LogoContainer = styled(Box)(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-5%",
}));

const AllJobsContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "40px",
  margin: "auto",
  marginTop: "40px",
  width: "80%",
}));

const TimeContainer = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  marginTop: "4%",
}));

const GreyText = styled(Typography)(() => ({
  color: "#6E8098",
  fontSize: "16px",
}));

const PositionText = styled(Typography)(() => ({
  color: "#19202D",
  fontSize: "20px",
  fontWeight: "700",
  margin: "2% 0",
}));

const LocationText = styled(Typography)(() => ({
  color: "#5964E0",
  fontSize: "14px",
  fontWeight: "700",
  marginTop: "15%",
}));
const OvalContainer = styled(Box)(() => ({
  background: "#6E8098",
  width: "4px",
  height: "4px",
  margin: "auto 0",
}));
