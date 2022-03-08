import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
// import BookmarkBorderIcon from '@mui/material/BookmarkBorder';
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapercave.com/wp/wp9109539.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6">Mars Blog</Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1337404291.jpg?w=1390&crop=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lorem ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Egestas purus viverra accumsan in nisl nisi Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque In egestas erat imperdiet sed euismod nisi porta
                    lorem mollis Morbi tristique senectus et netus
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-fake-smile.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      M.Erfan Pouladzadeh
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>{/* <BookmarkBorderIcon /> */}</Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://techcrunch.com/wp-content/uploads/2022/03/Serve-front-sidewalk.jpg?w=1390&crop=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lorem ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Egestas purus viverra accumsan in nisl nisi Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque In egestas erat imperdiet sed euismod nisi porta
                    lorem mollis Morbi tristique senectus et netus
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-fake-smile.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      M.Erfan Pouladzadeh
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>{/* <BookmarkBorderIcon /> */}</Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://techcrunch.com/wp-content/uploads/2022/03/instagram-creator-tags.png?w=1390&crop=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lorem ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Egestas purus viverra accumsan in nisl nisi Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque In egestas erat imperdiet sed euismod nisi porta
                    lorem mollis Morbi tristique senectus et netus
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-fake-smile.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      M.Erfan Pouladzadeh
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>{/* <BookmarkBorderIcon /> */}</Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://miuc.org/wp-content/uploads/2020/08/6-Reasons-why-you-should-learn-Programming-1280x720.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lorem ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua Egestas purus viverra accumsan in nisl nisi Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque In egestas erat imperdiet sed euismod nisi porta
                    lorem mollis Morbi tristique senectus et netus
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-fake-smile.jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      M.Erfan Pouladzadeh
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>{/* <BookmarkBorderIcon /> */}</Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
