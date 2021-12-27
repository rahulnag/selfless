import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import "./Document.css";
import Loader from "../Loader/Loader";
const Document = ({ setValue }) => {
  const [documents, setDocument] = useState([]);
  useEffect(() => {
    setValue(3);
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SelflessFamily-Files/SelflessWebsiteFiles/master/Document/document.json"
      )
      .then((response) => {
        setDocument(response.data);
      })
      .catch((e) => console.error(e));
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
      <a target="_black" href="https://www.capscode.in">
        <button
          style={{
            minWidth: "130px",
            height: "50px",
            margin: "10px",
            background: "#0bdd9c",
            border: "2px solid #1ba67b",
            color: "white",
            borderRadius: "4px",
            fontSize: "1rem",
            padding: "8px",
            paddingBottom: "13px",
          }}
        >
          Want to become a WEB DEVELOPER ?<br />
          <span style={{ fontSize: "12px" }}>CLICK HERE ➜</span>
        </button>
      </a>
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
          <Loader />
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
