// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import universityLogo from "assets/images/logos/gray-logos/logo-apple.svg"; // You can replace this with your university logo
import flutterLogo from "assets/images/logos/gray-logos/logo-facebook.svg"; // Replace with Flutter logo
import reactLogo from "assets/images/logos/gray-logos/logo-nasa.svg"; // Replace with React logo

function EducationExperience() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Education &</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            Background
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            My academic foundation and practical experience in software development
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Bachelor of Science"
              date="Information Technology & Systems"
              review="Comprehensive education in software development, database management, networking, and information systems. Gained strong foundation in programming principles and software engineering practices."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Flutter Development"
              date="Mobile App Specialist"
              review="Specialized in cross-platform mobile development using Flutter and Dart. Built multiple production-ready applications with modern UI/UX and efficient state management."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Full-Stack Projects"
              date="Practical Experience"
              review="Hands-on experience in full-stack development with React frontend and various backend technologies. Developed complete solutions from concept to deployment."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={universityLogo}
              alt="University"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={flutterLogo} alt="Flutter" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={reactLogo} alt="React" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
              alt="Java"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
              alt="PostgreSQL"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default EducationExperience;
