import React from "react"
import ViewPoints from "./ViewPoints"
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts"
import {
  getbackpress,
  getbowpress,
  getflutterkick,
  getfrontpress,
  gethiplift,
  getkneelift,
  getkneeliftcombo,
  getkneetochest,
  getlegraise,
  getlegscissors,
  getmountainclimber,
  getopencloselegraise,
  getoverheadarmspin,
  getoverheadarmtwist,
  getoverheadbend,
  getoverheadhipshake,
  getoverheadlungetwist,
  getoverheadpress,
  getoverheadsidebend,
  getoverheadsquat,
  getpendulumbend,
  getringraisecombo,
  getplank,
  getrussiantwist,
  getseatedforwardpress,
  getseatedringraise,
  getshoulderpress,
  getsidestep,
  getsquat,
  getstandingtwist,
  getthighpress,
  gettricepkickback,
  getwidesquat,
} from "../reducks/users/selectors"
import { useSelector } from "react-redux"
import ChartInput from "./ChartInput"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
  root: {
    height: "50vh",
    width: "95vw",
  },
}))


export const BackPressChart = (work) => {
  const selector = useSelector((state) => state)
  let data = getbackpress(selector)
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={16} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00"/>
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const BowPressChart = (work) => {
  const selector = useSelector((state) => state)
  let data = getbowpress(selector)
  const classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const FlutterKickChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getflutterkick(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const FrontPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getfrontpress(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const HipLiftChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = gethiplift(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const KneeLiftChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getkneelift(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const KneeLiftComboChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getkneeliftcombo(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const KneetoChestChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getkneetochest(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const LegRaiseChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getlegraise(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const LegScissorsChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getlegscissors(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const MountainClimberChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getmountainclimber(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const OpenCloseLegRaiseChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getopencloselegraise(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadArmSpinChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadarmspin(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadArmTwistChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadarmtwist(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadBendChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadbend(selector)
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
    data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
  
  } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadHipShakeChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadhipshake(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadLungeTwistChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadlungetwist(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadpress(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadSideBendChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadsidebend(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const OverheadSquatChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getoverheadsquat(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const PendulumBendChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getpendulumbend(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const PlankChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getplank(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const RingRaiseComboChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getringraisecombo(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const RussianTwistChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getrussiantwist(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const SeatedForwardPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getseatedforwardpress(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const SeatedRingRaiseChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getseatedringraise(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const ShoulderPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getshoulderpress(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const SquatChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getsquat(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  


export const SideStepChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getsidestep(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const StandingTwistChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getstandingtwist(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const ThighPressChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getthighpress(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const TricepKickbackChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = gettricepkickback(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
  

export const WideSquatChart = (work) => {
  const selector = useSelector((state) => state)
  
  const data = getwidesquat(selector)
  
  let classes = useStyles()
  const sl = "/"

  //データを日付順にsort
  if(data) {
  
 data.sort((a,b)=>a.day-b.day)

  //日付を最適化　String型YYYY/MM/DD
  Object.keys(data).forEach(a =>{
    data[a].day = String(data[a].day)
    if((data[a].day.match(/\//g)||[]).length<2){
      data[a].day = (data[a].day).slice(0,4)+sl+(data[a].day).slice(4,6)+sl+(data[a].day).slice(6,8)
    }
  })
   } else {
    data = [];
  }
  
  return (
    <>
      <div className={classes.root}>
        <ResponsiveContainer>
        <AreaChart className={classes.chart}
          data={data}
          margin={{left:ViewPoints().margin,right:ViewPoints().margin}}
        >
          <defs>
            <linearGradient id="colorCount" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#e73e0e" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" fontSize={18} fontWeight={600} dy={5} />
          <YAxis domain={[0,200]} fontSize={ViewPoints().size} fontWeight={800} />
          <CartesianGrid strokeDasharray="10 10" />
          <Tooltip fontSize={30} />
          <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
          <Brush dataKey="day" stroke="#ff8e00" height={ViewPoints().height} />
        </AreaChart>
        </ResponsiveContainer>
      </div>
      <ChartInput work={work} />
    </>
  )
  
}
