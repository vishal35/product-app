import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("https://5cac1d41c85e05001452eef0.mockapi.io/jobs")
      .then(({ data: { jobs } }) => {
        setJobs(jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Paper
      className="root"
      style={{ background: "#0d0b07", padding: "40px 20px" }}
    >
      <h2 style={{ color: "white" }}>All Jobs</h2>
      <Grid container spacing={3} xs={12}>
        {jobs.map((job) => (
          <Grid item xs={4} id={jobs.id}>
            <Cards>
              <CardContent>
                <Typography>{job.origin}</Typography>
                <Typography>{job.destination}</Typography>
                <Typography>{job.date}</Typography>
                <Typography>{job.price}</Typography>
              </CardContent>
            </Cards>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Jobs;
