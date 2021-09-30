import { OverheadBendChart } from "../components/Chart";
import { makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import OverheadBendIcon from "../icons/inclinacin-hacia-delantepng.png"
import { HomeMenuItem } from "../components/HomeMenuItem";
const useStyles = makeStyles({
  titlecard: {
    position: "relative",
    height: 160,
    backgroundColor: "#f4f4f4",
    margin: "20px auto",
    borderLeft: "solid 10px #ff8e00",
    width: "50rem",
  },
  title: {
    position: "absolute",
    top: "1.3rem",
    left: "18rem",
    fontSize: "2.1rem",
    fontWeight: "800",
    fontStyle: "italic",
    color: "#ff8e00",
    lineHeight: 1,
    letterSpacing: -2,
    textIndent: "-0.2em",
    transform: "scale(0.9, 1)",
    transformOrigin: "top",
  },
  sbtitle: {
    position: "absolute",
    top: "0.6rem",
    left: "18.5rem",
    color: "#ff8e00",
    fontWeight: 800,
    fontSize: 14,
    lineHeight: 1,
    textIndent: "0.05rem",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 60,
  },
  effect: {
    position: "absolute",
    top: "7rem",
    left: 0,
    width: "100%",
    color: "#9a9b9d",
    fontWeight: 500,
    fontSize: "1rem",
  },
  small: {
    fontWeight: 500,
    fontSize: 16,
  },
});


const OverheadBend = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Paper elevation={4} className={classes.titlecard}>
        <img src={OverheadBendIcon} alt="icon" className={classes.icon}></img>
        <p className={classes.sbtitle}>Overhead Bent</p>
        <h2 className={classes.title}>バンザイモーニング</h2>
        <div className={classes.effect}>
          <span>#体幹の強化</span>
          <span className={classes.small}>　</span>
          <span>#姿勢改善</span>
          <span className={classes.small}>　</span>
          <span>#背筋の強化</span>
        </div>
      </Paper>
      <OverheadBendChart work="OverheadBend" />
      <HomeMenuItem />
    </div>
  );
};

export default OverheadBend;
