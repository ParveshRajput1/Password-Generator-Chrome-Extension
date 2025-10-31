import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import './App.css';
const useStyles = makeStyles({
  root: {
    minWidth: 50,
    textAlign: "center"
  },
  title: {
    fontSize: 14,
  }
});
function App() {
  const classes = useStyles();
  const [password, setPassword] = React.useState("");
  const [copyStatus, setCopyStatus] = React.useState("")
  React.useEffect(() => {
    var pass = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    let newPassword = pass.substr(0, 15);
    setPassword(newPassword)
  }, [])
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6">
          Password Generator
        </Typography>
        <Typography variant='p' style={{ fontSize: 12 }}>Get random text of 15 character long.</Typography>
        <div className='password__container'>
          <span className='password_copText'>{password}</span>
          <span className='password_copyIcon'><FileCopyIcon style={{ fontSize: 15, cursor: "pointer" }} onClick={() => { navigator.clipboard.writeText(password); setCopyStatus('Copied') }} /></span>
          {copyStatus !== "" &&
            <span className="password_copyStatus">{copyStatus}</span>
          }
        </div>
      </CardContent>
    </Card>
  );
}

export default App;