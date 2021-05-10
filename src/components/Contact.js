import FormControl from '@material-ui/core/FormControl'
import Box from '@material-ui/core/Box';
import galaxy from '../img/galaxy.jpg'
import { spacing } from '@material-ui/system';      //for space setting inside Box

const Contact = () => {

    const theme = {
        spacing: [0, 2, 3, 5, 30]
    }


    return ( 
        <Box 
            width={1} 
            height="100%"
            style = {{backgroundImage: `url(${galaxy})`}}
            m = {0}
            p = {4}
            textAlign="center"
            >
            <Box
                bgcolor="#fff"
                m = {4}
                >
                <div>
                <h1>aaaaaa</h1>
            </div>
            <div>
                <h1>bbbbbb</h1>
            </div>
            </Box>
        </Box>
     );
}
 
export default Contact;