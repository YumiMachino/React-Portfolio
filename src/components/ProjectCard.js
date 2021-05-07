import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const ProjectCard = () => {

    // const cardStyle = {
    //     height: 300,
    //     backgroundColor: "#CDE1F8",
    //     marginTop:8,
    //     marginBottom: 19.2,
    //     marginLeft: 20,
    //     marginRight:20
    // }

    const useStyle = makeStyles({
        root: {
            maxWidth: 345,
            backgroundColor: "#CDE1F8",
            marginLeft:20,
            marginRight:20,
            marginTop:10,
            marginBottom:10
        },
         }
    );

    const classes = useStyle();


    return ( 
        <Card className={classes.root}> 
            <CardActionArea>
                <CardMedia
          component="img"
          alt="Project title"
          height="140"
          image="../img/vancouver.jpg"
          title="Project title"
        />

        <CardContent  >
          <Typography gutterBottom variant="h5" component="h2">
            Project title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            List of Used languages on this project
          </Typography>
        </CardContent>
            </CardActionArea>
            <CardActions>
        <Button size="small" color="primary">
          Check this out
        </Button>
      </CardActions>
        </Card>
     );
}
 
export default ProjectCard;