// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="person"
                title={
                  <>
                    About
                    <br />
                    Me
                  </>
                }
                description="Full-Stack & Mobile Developer from Tanzania"
              />
              <RotatingCardBack
                image={bgBack}
                title="Baraka Juma Mashimbe"
                description="Passionate software developer specializing in Flutter mobile applications and modern web technologies. Bachelor of Science in Information Technology and Systems."
                action={{
                  type: "external",
                  route: "mailto:juannabarack001@gmail.com",
                  label: "Contact Me",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <MKTypography variant="h3" fontWeight="bold" mb={3}>
              My Journey in Tech
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={4}>
              Im a passionate software developer based in Dar es Salaam, Tanzania, with expertise
              building cross-platform mobile applications using Flutter and modern web applications
              applications with React. I hold a Bachelor degree in Information Technology and
              Systems and have hands-on experience in full-stack development.
            </MKTypography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flutter_dash" // Flutter icon
                  title="Mobile Development"
                  description="Specialized in building cross-platform mobile applications using Flutter and Dart for both iOS and Android."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="code"
                  title="Full-Stack Skills"
                  description="Proficient in both frontend (React, JavaScript) and backend (Java, PHP, PostgreSQL) technologies."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="design_services"
                  title="UI/UX Design"
                  description="Experience in creating modern, user-friendly interfaces using Figma and Material Design principles."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="school"
                  title="Continuous Learning"
                  description="Committed to staying updated with the latest technologies and best practices in software development."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
