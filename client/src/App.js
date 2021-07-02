import "./App.css";

import React from "react";

import {
  Grid,
  Typography,
  Button,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Input,
  Card,
  Link,
  Paper,
  TextField,
  FormControl,
} from "@material-ui/core";
import Particles from "react-particles-js";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Paytone One", '"Segoe UI"'].join(","),
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#e0582e",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: ["Segoe UI"].join(","),
  },
  cardStyle: {
    padding: 5,
  },
  titleCardStyle: {
    padding: 6,
    opacity: 0.9,
  },
  mailcard: {
    padding: 10,
  },
  title: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "4.5rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "4.5rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "4.5rem",
    },
  },
  Titlewrap: {
    height: "19vh",
  },
  gridattempt: {
    height: "60vh",
  },
  middle: {
    [theme.breakpoints.only("xs")]: {
      height: "40vh",
      spacing: 2,
    },
    [theme.breakpoints.only("sm")]: {
      height: "40vh",
    },
    [theme.breakpoints.between("md", "xl")]: {
      height: "50vh",
    },
    width: "100vw",
  },
  linktext: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.7rem",
    },
    [theme.breakpoints.between("md", "xl")]: {
      fontSize: "3rem",
    },
  },
  lower: {
    [theme.breakpoints.between("xs", "sm")]: {
      height: "20vh",
    },
    [theme.breakpoints.between("md", "xl")]: {
      height: "20vh",
    },
  },
  emailInput: {
    marginTop: "10px",
    backgroundColor: "white",
    opacity: ".7",
  },
  lowerItem: {},
  emailText: {
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.rem",
    },
    [theme.breakpoints.between("md", "xl")]: {
      fontSize: "1rem",
    },
  },
  Mailtext: {
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.4rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.between("md", "xl")]: {
      fontSize: "2.8rem",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Particles
        style={{ position: "absolute", zIndex: -2 }}
        height="100%"
        width="100%"
        params={{
          particles: {
            color: {
              value: "#FFFFFF",
            },
            line_linked: {
              enable: false,
              color: {
                value: "#000000",
              },
            },
            number: {
              value: 300,
            },
            size: {
              value: 4,
            },
            move: {
              direction: "bottom",
              outMode: "out",
            },
          },
        }}
      />

      <div>
        <ThemeProvider theme={theme}>
          <Grid
            className={classes.Titlewrap}
            alignItems="center"
            justify="center"
            xs={12}
            container
          >
            <Card className={classes.titleCardStyle}>
              <Typography
                color="primary"
                gutterBottom
                variant="h1"
                className={classes.title}
              >
                {" "}
                Snow Tempo
              </Typography>
            </Card>
          </Grid>

          <Grid
            container
            justify="center"
            alignItems="center"
            spacing={2}
            direction="column"
            className={classes.gridattempt}
          >
            <Grid item>
              <Card className={classes.cardStyle}>
                {" "}
                <Link
                  color="secondary"
                  className={classes.linktext}
                  variant="h3"
                  href="https://www.tiktok.com/@snowtempo?lang=en"
                >
                  Tik Tok
                </Link>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.cardStyle}>
                {" "}
                <Link
                  color="secondary"
                  className={classes.linktext}
                  variant="h3"
                  href="https://www.instagram.com/snowtempo/"
                >
                  Instagram
                </Link>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.cardStyle}>
                {" "}
                <Link
                  color="secondary"
                  className={classes.linktext}
                  variant="h3"
                  href="https://www.youtube.com/channel/UCezgXSp9TSsG422i5-VDvMQ/featured"
                >
                  Youtube
                </Link>
              </Card>
            </Grid>
            <Grid item></Grid>
            <Grid item>
              <Card className={classes.cardStyle}>
                {" "}
                <Link
                  color="secondary"
                  className={classes.linktext}
                  variant="h3"
                  href="https://soundcloud.com/snowtempo"
                >
                  Sound Cloud
                </Link>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.cardStyle}>
                <Typography className={classes.emailText}>
                  {" "}
                  snowtempomusic@gmail.com
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
