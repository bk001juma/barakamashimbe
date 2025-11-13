// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Skills data - we'll create this
const skillsData = [
  {
    title: "Mobile Development",
    description: "Cross-platform mobile app development using Flutter",
    items: [
      {
        image: "https://via.placeholder.com/300x200/4CAF50/white?text=Flutter", // Replace with actual image
        name: "Flutter Framework",
        count: "4+ Projects",
      },
      {
        image: "https://via.placeholder.com/300x200/2196F3/white?text=Dart",
        name: "Dart Programming",
        count: "Expert",
      },
      {
        image: "https://via.placeholder.com/300x200/FF9800/white?text=UI%2FUX",
        name: "Mobile UI/UX",
        count: "Figma Design",
      },
    ],
  },
  {
    title: "Frontend Development",
    description: "Modern web development with React and more",
    items: [
      {
        image: "https://via.placeholder.com/300x200/61DAFB/white?text=React",
        name: "React.js",
        count: "2+ Projects",
      },
      {
        image: "https://via.placeholder.com/300x200/1572B6/white?text=CSS3",
        name: "CSS & Styling",
        count: "Material-UI",
      },
      {
        image: "https://via.placeholder.com/300x200/000000/white?text=Git",
        name: "Version Control",
        count: "Git & GitHub",
      },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Server-side development and database management",
    items: [
      {
        image: "https://via.placeholder.com/300x200/007396/white?text=Java",
        name: "Java",
        count: "Intermediate",
      },
      {
        image: "https://via.placeholder.com/300x200/777BB4/white?text=PHP",
        name: "PHP",
        count: "Intermediate",
      },
      {
        image: "https://via.placeholder.com/300x200/336791/white?text=PostgreSQL",
        name: "PostgreSQL",
        count: "Database Management",
      },
    ],
  },
];

function DesignBlocks() {
  const renderData = skillsData.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <ExampleCard image={image} name={name} count={count} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Technical Expertise"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Skills & Technologies
          </MKTypography>
          <MKTypography variant="body1" color="text">
            A comprehensive overview of my technical skills and the technologies I use to build
            amazing applications.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
