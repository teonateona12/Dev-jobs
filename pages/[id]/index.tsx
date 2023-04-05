import React from "react";
import { useRouter } from "next/router";
import data from "../../data.json";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import {
  ApplyButton,
  ApplyButtonDiv,
  CompanyDiv,
  CompanyName,
  CompanySite,
  Description,
  GreyText,
  JobDiv,
  LocationText,
  LogoContainer,
  OvalContainer,
  PositionText,
  Requirements,
  SiteButton,
  TimeContainer,
} from "../../styles/style";
import Link from "next/link";

export default function Route() {
  const router = useRouter();
  const { id } = router.query;
  const detail = data.find((item) => id === item.company);
  return (
    <>
      <CompanyDiv
        sx={{
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: " 0 5% 5% 5%", md: "0 5% 0 0" },
          justifyContent: { md: "space-between" },
          width: { xs: "80%", md: "60%" },
        }}
      >
        <Box
          sx={{
            display: { md: "flex" },
          }}
        >
          <LogoContainer
            sx={{
              backgroundColor: `${detail?.logoBackground}`,
              margin: { xs: "auto", md: "0 " },
              marginTop: { xs: "-15%", md: "0" },
              width: { xs: "50px", md: "140px" },
              height: { xs: "50px", md: "140px" },
              borderRadius: { xs: "15px", md: "0" },
            }}
          >
            <Box component="img" src={detail?.logo} />
          </LogoContainer>
          <Box
            sx={{
              gap: { md: "20px" },
              margin: { md: "auto 5%" },
            }}
          >
            <CompanyName>{detail?.company}</CompanyName>
            <CompanySite>{`${detail?.company.toLowerCase()}.com`}</CompanySite>
          </Box>
        </Box>
        <SiteButton
          sx={{
            width: { sx: "50%", md: "20%" },
          }}
        >
          <Link href={`${detail?.website}`}>Company Site</Link>
        </SiteButton>
      </CompanyDiv>
      <JobDiv
        sx={{
          width: { xs: "80%", md: "60%" },
        }}
      >
        <Box
          sx={{
            display: { md: "flex" },
            marginBottom: { md: "10%" },
            justifyContent: { md: "space-between" },
          }}
        >
          <Box>
            <TimeContainer>
              <GreyText>{detail?.postedAt}</GreyText>
              <OvalContainer></OvalContainer>
              <GreyText>{detail?.contract}</GreyText>
            </TimeContainer>
            <PositionText>{detail?.position}</PositionText>

            <Box>
              <LocationText>{detail?.location}</LocationText>
            </Box>
          </Box>
          <ApplyButton
            onClick={() => router.push(`${detail?.apply}`)}
            sx={{
              margin: { md: "auto 0" },
              width: { xs: "100%", md: "30%" },
            }}
          >
            Apply Now
          </ApplyButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Description>{detail?.description}</Description>
          <Requirements>Requirements</Requirements>
          <Description>{detail?.requirements.content}</Description>

          <ul>
            {detail?.requirements.items.map((item, index) => (
              <Description
                key={index}
                sx={{
                  padding: "0 5%",
                }}
              >
                <li>{item}</li>
              </Description>
            ))}
          </ul>

          <Requirements>What You Will Do</Requirements>

          <Description>{detail?.role.content}</Description>

          <ol>
            {detail?.role.items.map((item, index) => (
              <Description
                key={index}
                sx={{
                  padding: "0 5%",
                }}
              >
                <li>{item}</li>
              </Description>
            ))}
          </ol>
        </Box>
      </JobDiv>
      <ApplyButtonDiv>
        <ApplyButton
          onClick={() => router.push(`${detail?.apply}`)}
          sx={{
            margin: { xs: "0", md: "0 auto" },
            width: { xs: "100%", md: "30%" },
            display: { md: "flex" },
          }}
        >
          Apply Now
        </ApplyButton>
      </ApplyButtonDiv>
    </>
  );
}
