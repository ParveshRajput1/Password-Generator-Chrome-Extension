import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import "./App.css";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 400,
    margin: "auto",
    textAlign: "center",
    borderRadius: 15,
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10,
  },
});

function App() {
  const classes = useStyles();
  const [password, setPassword] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [showCopy, setShowCopy] = React.useState(false); // 👈 control icon visibility

  // 🧠 Password Generator Logic
  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    setCopied(false);
    setShowCopy(true); // 👈 show icon after generating password
  };

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="primary">
          🔐 Password Generator
        </Typography>
        <Typography style={{ fontSize: 13, color: "#555" }}>
          Generate secure and random passwords easily.
        </Typography>

        <div className="password__container">
          <span className="password_copText">
            {password || "Press Button Below"}
          </span>

          {/* 👇 Only show Copy Icon after password generated */}
          {showCopy && (
            <span className="password_copyIcon" onClick={copyPassword}>
              <FileCopyIcon
                style={{
                  fontSize: 18,
                  cursor: "pointer",
                  color: copied ? "#00C853" : "#6a11cb", // green when copied
                  transition: "color 0.3s ease",
                }}
              />
            </span>
          )}

          {copied && <span className="password_copyStatus">Copied!</span>}
        </div>

        <div className="password__buttons">
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#6a11cb",
              marginTop: 20,
              textTransform: "none",
            }}
            onClick={generatePassword}
          >
            Generate Password
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default App;
