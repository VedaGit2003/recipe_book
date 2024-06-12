import { AppBar, Box, Container, Stack, styled, Toolbar, Typography, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Recipes", Link: "#" },
    { Name: "About Us", Link: "#" },
    { Name: "Subscribe", Link: "#" },
  ];
  


  

  return (
    <AppBar position="static" sx={{ bgcolor: "tomato" }}>
      <Container>
        <Toolbar disableGutters>
          <MenuBox sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Link href={item.Link} key={item.Name} underline="none">
                <Typography variant="body2" color={"white"}>
                  {item.Name}
                </Typography>
              </Link>
            ))}
          </MenuBox>
          <Box sx={{ flexGrow: 1 }} />
          <Box color={"white"} mt={1}>
            ©2024 veda's
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

