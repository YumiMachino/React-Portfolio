import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import astronomy from '../img/astronomy.jpg'
import { spacing } from '@material-ui/system';      //for space setting inside Box
import { Button, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = () => {

    return ( 
        <Box 
            id="contact"
            width={1} 
            height="100%"
            style = {{backgroundImage: `url(${astronomy})`}}
            m = {0}
            p = {4} 
        >
            <Box
                m={10}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                >
                 <Box
                    bgcolor="#fff"
                    width={1}
                    display="flex"
                    flexDirection="column"
                    p={8}
                    >
                    <div>
                        <h5 className="title-left">Send A Message</h5>
                    </div>
               
                    <div >
                        <TextField 
                            id="outlined-full-width" 
                            label="Your Name" 
                            variant="outlined" 
                            fullWidth
                            margin="normal"
                            style={{margin: 20}}
                                />
                        <TextField 
                            id="outlined-full-width" 
                            label="Your Email" 
                            variant="outlined" 
                            fullWidth
                            margin="normal"
                            style={{margin: 20}}
                                />
                        <TextField 
                            id="outlined-full-width" 
                            label="Subject" 
                            variant="outlined" 
                            fullWidth
                            margin="normal"
                            style={{margin: 20}}
                                />
                        <TextField 
                            id="outlined-multiline-static" 
                            label="Message" 
                            variant="outlined" 
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            style={{margin: 20}}
                                />
                        <div className="btn-style" style={{justifyContent: 'center'}}>              
                            <Button variant="contained" color="primary">Send Messages</Button>
                        </div>
                    </div>
                 </Box>

                <Box
                    bgcolor="#fff"
                    width={1}
                    display="flex"
                    flexDirection="column"
                    p={8}
                    >
                     <div>
                        <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div class="self-intro">
                        <p>
                            Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                            Simply fill the from and send me an email.
                        </p>
                    </div>
                    <div className="link-section">
                        <IconButton color="primary" aria-label="GitHub link" size="medium">
                            <GitHubIcon />
                        </IconButton>
                         <IconButton color="primary" aria-label="GitHub link" size="medium">
                            <LinkedInIcon />
                        </IconButton>
                    </div>
                 </Box>
            </Box>
        </Box>
     );
}
 
export default Contact;