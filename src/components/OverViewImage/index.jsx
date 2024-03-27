import React from "react";
import "tailwindcss/tailwind.css";
import "./style.css";
import { Arrow } from "./components/common/Arrow";
import { Panel } from "./components/common/Panel";
import { Product } from "./components/common/Product";

import { PopupContent } from "./components/common/PopupContent";
import { GovernancePanel } from "./components/GovernancePanel";
import { ControlPanel } from "./components/ControlPanel";
import { OpsPanel } from "./components/OpsPanel";
import { TelemetryPanel } from "./components/TelemetryPanel";
import { DataPanel } from "./components/DataPanel";
import { AppContext } from "./context";

const hoverContent = {
  title: "云原生xxxx",
  image:
    "https://gw.alicdn.com/imgextra/i4/O1CN012zo8OT21NEJMg5vvT_!!6000000006972-2-tps-216-174.png",
  labels: ["Spring", "Java", "MQ"],
  links: {
    Github: {
      link: "https://github.com/apache/rocketmq",
      stars: 20407,
      forks: 11383,
      titleClassName: "text-black",
      linkClassname: "text-green-500",
    },
    官网: {
      link: "https://rocketmq.apache.org/",
      titleStyle: "text-black",
      linkStyle: "text-green-500",
    },
    最新版本: {
      link: "https://rocketmq.apache.org/docs/quick-start/",
    },
    快速入门: {
      link: "https://rocketmq.apache.org/docs/quick-start/",
    },
    快速构建: {
      link: "https://rocketmq.apache.org/docs/quick-start/",
    },
  },
};

function App({
  height = "auto",
  width = "100%",
  colors = {
    panelColor: "linear-gradient(0deg, #FBFDFF 0%, #F4F8FF 100%)",
    arrowColor: "#2491FF",
  },
}) {
  return (
    <AppContext.Provider
      value={{
        height,
        width,
        colors: {
          panelColor: "linear-gradient(0deg, #FBFDFF 0%, #F4F8FF 100%)",
          arrowColor: "#2491FF",
          ...colors,
        },
      }}
    >
      <div
        class={`w-full h-auto flex flex-col justify-around bg-[#edf1fa] p-2 overflow-hidden`}
        id="overview-image-root"
        style={{
          width,
          height,
          background:
            "url('https://gw.alicdn.com/imgextra/i3/O1CN01kMsmPQ1rqrmbBpNo1_!!6000000005683-0-tps-3600-1440.jpg')",
        }}
      >
        <div class="flex justify-around flex-1 items-center">
          <GovernancePanel />
          <ControlPanel />
        </div>
        <div class="flex justify-around flex-[2]">
          <DataPanel />
        </div>
        <div class="flex justify-around flex-1">
          <OpsPanel />
          <TelemetryPanel />
        </div>
        {/* <Demo /> */}
      </div>
    </AppContext.Provider>
  );
}

const Demo = () => (
  <div class="bg-transparent">
    {/* <Panel title="治理面">
      <Product
        image={SentinelImage}
        label="Sentinel"
        hoverContent={hoverContent}
      />
    </Panel>

    <Arrow d="M0 50 H300 V90" isTurn />
    <Arrow d="M0 50 H300" /> */}
  </div>
);

// render(<App height="900px" />, document.getElementById("app"));
export const OverViewImage = App;
