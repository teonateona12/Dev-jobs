import { useSelector } from "react-redux";
import Filter from "@/components/Filter/Filter";
import data from "../data.json";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const inputValue = useSelector(
    (store: { search: { input: string } }) => store.search.input
  );
  const locationValue = useSelector(
    (store: { search: { location: string } }) => store.search.location
  );
  const fullTimeValue = useSelector(
    (store: { search: { fullTime: boolean } }) => store.search.fullTime
  );

  const filter = () => {
    const filteredTitle =
      inputValue === ""
        ? data
        : data.filter((item) =>
            item.position.toLowerCase().includes(inputValue.toLowerCase())
          );
    const filteredLocation =
      locationValue === ""
        ? filteredTitle
        : filteredTitle.filter((item) =>
            item.location.toLowerCase().includes(locationValue.toLowerCase())
          );
    const filterfullTime = !fullTimeValue
      ? filteredLocation
      : filteredLocation.filter((item) => item.contract === "Full Time");

    return filterfullTime;
  };
  const filteredArray = filter();

  return (
    <Box>
      <Filter />
      <AllJobsContainer>
        {filteredArray.map((item) => (
          <JobContainer
            onClick={() => router.push(`${item.company}`)}
            sx={{
              width: { xs: "100%", md: "47%", lg: "30%" },
            }}
          >
            <LogoContainer
              sx={{
                backgroundColor: `${item.logoBackground}`,
              }}
            >
              <Box component="img" src={item.logo} />
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
