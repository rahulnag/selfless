import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, BrowserRouter } from "react-router-dom";
import "./TopNav.css";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
function TopTab({ value, setValue }) {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#fafafa" }}
        elevation={0}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="#fafafa"
          variant="scrollable" //this is commented as both varient:scrollable and centered will not work together
          scrollButtons="auto" //on
          aria-label="scrollable auto tabs example"
          // centered="true"
        >
          <Link to="/" className="NavLink">
            <Tab label="Home" value={0} onClick={() => handleChange(0)} />
          </Link>
          <Link to="/testimonails" className="NavLink">
            <Tab
              label="Testimonails"
              value={1}
              onClick={() => handleChange(1)}
            />
          </Link>
          <Link to="/openings" className="NavLink">
            <Tab label="Jobs" value={2} onClick={() => handleChange(2)} />
          </Link>
          <Link to="/aboutus" className="NavLink">
            <Tab label="About" value={3} onClick={() => handleChange(3)} />
          </Link>
          <Link to="/documents" className="NavLink">
            <Tab label="Docs" value={4} onClick={() => handleChange(4)} />
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default TopTab;
