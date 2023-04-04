import React from "react";
import { useRouter } from "next/router";
import data from "../../data.json";
import { Box, Typography } from "@mui/material";
import {
  CompanyDiv,
  CompanyName,
  CompanySite,
  LogoContainer,
  SiteButton,
} from "./style";
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
            <img src={detail?.logo} />
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
    </>
  );
}
