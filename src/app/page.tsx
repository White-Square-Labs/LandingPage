"use client";
import { Box, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";

// TODO: Setup theme properly
// TODO: Use theme variables
// TODO: Remove light/dark theme
// TODO: Utilise SalvatoreRoman fonts

export default function Home() {
  return (
    <main>
      <Box
        maxWidth={1200}
        mx="auto"
        px={2}
        pb={4}
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="center"
        minHeight={"100vh"}
      >
        <Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box
              component="img"
              alt="logo"
              src="./logo.png"
              height={{ xs: "auto", sm: "auto" }}
              width={{ xs: 320, sm: 550 }}
              px={2}
              py={{ xs: 4, sm: 6 }}
            />
          </Box>
          <Box
            px={2}
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            flexWrap="wrap"
            sx={{ borderTop: "1px solid white", paddingTop: 4 }}
          >
            <Link
              href="/"
              style={{ textDecoration: "none", cursor: "not-allowed" }}
            >
              <Typography
                variant="body1"
                display="flex"
                alignItems="center"
                sx={{
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                <LockIcon sx={{ marginRight: 1 }} />
                White Vault
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#999", marginTop: 1, maxWidth: "650px" }}
              >
                A vault utilising ERC4626 that enables the deposit of ETH or
                WETH in return for WVT (White Vault Token). It capitalises on
                the Aave protocol.
              </Typography>
            </Link>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: "#999", textAlign: "center" }}>
          An experiment by{" "}
          <Link
            href="https://twitter.com/solidoracle"
            target="_blank"
            style={{ color: "white" }}
          >
            solidoracle
          </Link>{" "}
          and{" "}
          <Link
            href="https://twitter.com/woodelliot"
            target="_blank"
            style={{ color: "white" }}
          >
            woodelliot
          </Link>
          .
        </Typography>
      </Box>
    </main>
  );
}
