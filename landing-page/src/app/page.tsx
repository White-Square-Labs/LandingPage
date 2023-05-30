"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ProjectCard {
  title: string;
  description: string;
  image: {
    path: string;
    alt: string;
  };
}

export default function Home() {
  const projects: ProjectCard[] = [
    {
      title: "White Vault",
      description:
        "A vault utilising ERC4626 that enables the deposit of ETH or WETH in return for WVT (White Vault Token). It capitalises on the Aave protocol.",
      image: {
        path: "/vault.jpg",
        alt: "Vault",
      },
    },
  ];

  return (
    <main>
      <Box maxWidth={1200} mx="auto" px={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={3}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            py={4}
          >
            <Box
              sx={{ height: 100, width: 100, border: "3px solid black" }}
            ></Box>
            <Typography variant="h1" my={3} textAlign="center" fontSize={32}>
              White Square
              <Box component="span" my={0.5} display="block" fontSize={24}>
                Labs
              </Box>
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="h2"
          my={3}
          fontSize={20}
          fontWeight={500}
          sx={{ textDecoration: "underline " }}
        >
          Projects
        </Typography>
        <Box
          my={6}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          flexWrap="wrap"
          gap={6}
        >
          {projects.map(({ title, description, image }, id) => (
            <ProjectCard
              key={id}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </Box>
      </Box>
    </main>
  );
}

const ProjectCard = ({ title, description, image }: ProjectCard) => {
  return (
    <Card sx={{ width: 320, border: "1px solid black" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image.path}
          alt={image.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" endIcon={<ArrowForwardIcon />}>
          View project
        </Button>
      </CardActions>
    </Card>
  );
};
