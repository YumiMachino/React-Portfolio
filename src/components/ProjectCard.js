import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';


const ProjectCard = (props) => {
  /*setting props*/
  const { title, thumbnail, languages, projectURL} = props;
  
  /*setting for styling */
  const useStyle = makeStyles({
    card: {
      maxWidth: 350,
      backgroundColor: "#CDE1F8",
      marginLeft:20,
      marginRight:20,
      marginTop:10,
      marginBottom:10,
    },
    media: {
      height: "300px",
      backgroundColor:"#4287f5"
    }
  });

  const classes = useStyle();

    return ( 
        <Card className={classes.card}> 
          <CardActionArea>
            <CardMedia 
              className={classes.media}
              component='img'
              src={thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {languages}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" color="primary" href={projectURL} variant='outlined'>
              Check this out
            </Button>
           </CardActions>
        </Card>
     );
}
 
export default ProjectCard;