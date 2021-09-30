import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
} from "../reducks/users/selectors";
import { useSelector } from "react-redux";
import ChartInput from "./ChartInput";

export const BackPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getbackpress(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const BowPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getbowpress(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const FlutterKickChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getflutterkick(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const FrontPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getfrontpress(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const HipLiftChart = (work) => {
  const selector = useSelector((state) => state);
  const data = gethiplift(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const KneeLiftChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getkneelift(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const KneeLiftComboChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getkneeliftcombo(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const KneetoChestChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getkneetochest(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const LegRaiseChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getlegraise(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const LegScissorsChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getlegscissors(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const MountainClimberChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getmountainclimber(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const OpenCloseLegRaiseChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getopencloselegraise(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const OverheadArmSpinChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getoverheadarmspin(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const OverheadArmTwistChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getoverheadarmtwist(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const OverheadBendChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getoverheadbend(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const OverheadHipShakeChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getoverheadhipshake(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const OverheadLungeTwistChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getoverheadlungetwist(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const OverheadPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getoverheadpress(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const OverheadSideBendChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getoverheadsidebend(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const OverheadSquatChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getoverheadsquat(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const PendulumBendChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getpendulumbend(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const PlankChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getplank(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const RingRaiseComboChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getringraisecombo(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const RussianTwistChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getrussiantwist(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const SeatedForwardPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getseatedforwardpress(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const SeatedRingRaiseChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getseatedringraise(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const ShoulderPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getshoulderpress(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const SquatChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getsquat(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};

export const SideStepChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getsidestep(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const StandingTwistChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getstandingtwist(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const ThighPressChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getthighpress(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const TricepKickbackChart = (work) => {
  const selector = useSelector((state) => state);
  const data = gettricepkickback(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};
export const WideSquatChart = (work) => {
  const selector = useSelector((state) => state);
  const data = getwidesquat(selector);
  return (
    <>
      <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        margin={{right: 300, left: 300,}}
        data={data}
      >
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e73e0e" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ff8e00" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="day" domain={["DAYS"]} fontSize="18px" />
        <YAxis domain={[0, 500]} fontSize="18px"/>
        <CartesianGrid strokeDasharray="10 10" />
        <Tooltip />
        <Area type="liner" dataKey="count" stroke="#e73e0e" fillOpacity={1} fill="url(#colorCount)" />
      </AreaChart>
      </ResponsiveContainer>
      <ChartInput work={work} />
    </>
  );
};