import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { documents } from "./documents";
import "./Document.css";

const Document = ({ setValue }) => {
  useEffect(() => {
    setValue(3);
  }, []);

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          paddingTop: "12px",
          color: "rgb(0, 144, 99)",
        }}
      >
        Document Collection And Their Links
      </h2>
      <br />
      <Grid container>
        {documents.length > 0 ? (
          documents.map((e) => {
            return (
              <Grid item lg={3} md={4} sm={12} xs={12} className="CourseLink">
                <a href={e.link} style={{ textDecoration: "none" }}>
                  <Paper
                    style={{
                      height: "100%",
                      textAlign: "center",
                      boxShadow:
                        "0px 0px 0px -1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 10%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                    }}
                    elevation={1}
                  >
                    <h3 style={{ color: "#777E8B" }}>{e.coursename}</h3>
                    <Divider light />
                    <p style={{ color: "#8395A7" }}>{e.courseDetails}</p>
                  </Paper>
                </a>
              </Grid>
            );
          })
        ) : (
          <h2>loading...</h2>
        )}
      </Grid>
      <br />
      <br />
      <br />
      <div
        style={{
          height: "80vh",
          backgroundColor: "white",
          margin: "9px",
          borderRadius: "8px",
          boxShadow:
            "0px 0px 0px -1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            paddingTop: "12px",
            color: "rgb(0, 144, 99)",
          }}
        >
          Plan Of 15 Day Course & Guaranteed Placement
        </h2>
      </div>
    </>
  );
};

export default Document;
