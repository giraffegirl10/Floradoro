import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Card,
  CardContent,
  CardActions,
  Stack,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
//keeps track of initial pomodoro length in seconds
const POMODORO_DURATION = 1 * 60;

function App() {
  //state variables to keep track of value of seconds and if its running
  const [seconds, setSeconds] = useState(POMODORO_DURATION);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    //pause timer if isRunning is false or the timer hits 0
    if (!isRunning || seconds === 0) return;

    //create an interval that will decrement seconds
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    //cleanup function - called when dependency array changes or component is dismounted
    return () => clearInterval(timer);

    //dependency array
  }, [isRunning, seconds]);

  //changing seconds format into minutes:seconds
  function formatTime() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    //convert numbers to string and pad the seconds so its always 2 characters, 5:0-> 5:00
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  return (
    <Box
      //centers everything in the box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Card sx={{ p: 2, minWidth: 450 }} variant="outlined">
        <CardHeader
          title="Pomodoro"
          action={
            <Tooltip title="Refresh">
              <IconButton
                onClick={() => {
                  setSeconds(POMODORO_DURATION);
                  setIsRunning(false);
                }}
              >
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          }
        />
        {/* Pomodoro page header */}
        <CardContent>
          <Stack
            direction="column"
            spacing={3}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* display timer text */}
            <Typography variant="h4">{formatTime()}</Typography>

            {/* linear progress bar from material UI */}
            <Box sx={{ width: "100%" }} key={isRunning ? "running" : "paused"}>
              <LinearProgress
                variant="determinate"
                // getting the percentage value of time
                value={
                  ((POMODORO_DURATION - seconds) / POMODORO_DURATION) * 100
                }
                sx={{
                  height: 10,
                  borderRadius: 5,

                  //css selector
                  "& .MuiLinearProgress-bar": {
                    //makes the bar move smoothly
                    transition: "transform 1s linear",
                  },
                }}
              />
            </Box>
          </Stack>
        </CardContent>
        {/* stop and start button, inverts current value of isRunning and conditionally changes button text based on isRunning's value */}
        <CardActions>
          <Button
            onClick={() => setIsRunning((prev) => !prev)}
            variant="contained"
            fullWidth
          >
            {isRunning ? "Pause" : "Start"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default App;
