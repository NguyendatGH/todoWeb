// import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
function Home() {
  return (
    <>
      <Box
        sx={{
          minWidth: "90vw",
          minheight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#EEEEEE",
        }}
      >
        <Card
          sx={{
            minWidth: "36vw",
            // height: "94vh",
            display: "flex",
            // flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              width: "100%",
              height: "94vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "sans-serif",
                fontSize: "30px",
              }}
            >
              Todo Apps MUI
            </Typography>

            {/* checkBox area  */}
            <Typography sx={{ paddingTop: "30px" }}>Check box Area</Typography>
            <Box
              display={"flex"}
              id="checkBoxArea"
              sx={
                {
                  // width: "100%",
                }
              }
            >
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Checkbox defaultChecked color="success" />
                <Typography>High</Typography>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Checkbox defaultChecked color="success" />
                <Typography>normal</Typography>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Checkbox defaultChecked color="success" />
                <Typography>easy</Typography>
              </Stack>
            </Box>

            {/* Task display */}
            <Box>
              <Typography>Your Task here</Typography>
              <Stack
                id="taskItem"
                sx={{
                  display: " flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox />
                <Typography sx={{ flex: 1 }}>An com</Typography>
                <Chip color="error" label="high"></Chip>
              </Stack>
              <Stack
                id="taskItem"
                sx={{
                  display: " flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox />
                <Typography sx={{ flex: 1 }}>An com</Typography>
                <Chip color="success" label="easy"></Chip>
              </Stack>
              <Stack
                id="taskItem"
                sx={{
                  display: " flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox />
                <Typography sx={{ flex: 1 }}>An com</Typography>
                <Chip color="warning" label="normal"></Chip>
              </Stack>
            </Box>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: "auto",
              }}
            >
              <Divider sx={{ mt: "auto" }} />
              <Stack
                sx={{
                  paddingTop: "20px",
                  height: "auto",
                  boxSizing: "border-box",
                }}
              >
                <Typography> CreateTask</Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxSizing: "border-box",
                    paddingTop: "10px",
                    rowGap: "20px ",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="New task"
                    variant="outlined"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      minWidth: "78%",
                    }}
                  />
                  <FormControl
                    sx={{ justifyContent: "flex-end", minWidth: "20%" }}
                  >
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="type"
                      sx={{}}
                    >
                      <MenuItem>high</MenuItem>
                      <MenuItem>normal</MenuItem>
                      <MenuItem>easy</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <Button variant="contained" sx={{ marginTop: "10px" }}>
                  Add your new task
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Home;
