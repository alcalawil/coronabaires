const es = require("./locale_es");

export const provincias = [
  "caba",
  "buenos_aires",
  "catamarca",
  "chaco",
  "chubut",
  "cordoba",
  "corrientes",
  "entre_rios",
  "formosa",
  "jujuy",
  "la_pampa",
  "la_rioja",
  "mendoza",
  "misiones",
  "neuquen",
  "rio_negro",
  "salta",
  "san_juan",
  "san_luis",
  "santa_cruz",
  "santa_fe",
  "sgo_del_stero",
  "tierra_del_fuego",
  "tucuman",
];

export const hBarOptions = {
  chart: {
    type: "bar",
    height: 380,
    locales: [es],
    defaultLocale: "es",
    fomtFamily: "Arial",
  },
  plotOptions: {
    bar: {
      barHeight: "100%",
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  colors: [
    "#90ee7e",
    "#f9a3a4",
    "#69d2e7",
    "#f48024",
    "#13d8aa",
    "#e26d9e",
    "#33b2df",
    "#ff3300",
    "#A5978B",
    "#e5d814",
  ],
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    style: {
      colors: ["#000"],
      textAnchor: "middle",
      fontSize: "13px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "semi-bold",
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    offsetX: 0,
    dropShadow: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  // xaxis: {
  //   categories: provincias,
  // },
  yaxis: {
    labels: {
      show: false,
    },
  },
  title: {
    text: "Casos por provincias",
    align: "center",
    floating: true,
  },
  subtitle: {
    text: "Casos por provincias en la fecha seleccionada",
    align: "center",
  },
  tooltip: {
    theme: "dark",
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
};

export const vBarOptions = {
  chart: {
    type: "bar",
    height: 350,
    locales: [es],
    defaultLocale: "es",
  },
  colors: ["#15DAF4"], //#FF0043
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "Totales por dia",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " personas";
      },
    },
  },
};

export const lineOptions = {
  chart: {
    height: 350,
    type: "line",
    id: "areachart-2",
    locales: [es],
    defaultLocale: "es",
  },
  colors: ["#15DAF4"], //#FF0043
  annotations: {
    yaxis: [
      // {
      //   y: 8200,
      //   borderColor: "#00E396",
      //   label: {
      //     borderColor: "#00E396",
      //     style: {
      //       color: "#fff",
      //       background: "#00E396",
      //     },
      //     text: "Support",
      //   },
      // },
      // {
      //   y: 8600,
      //   y2: 9000,
      //   borderColor: "#000",
      //   fillColor: "#FEB019",
      //   opacity: 0.2,
      //   label: {
      //     borderColor: "#333",
      //     style: {
      //       fontSize: "10px",
      //       color: "#333",
      //       background: "#FEB019",
      //     },
      //     text: "Y-axis range",
      //   },
      // },
    ],
    xaxis: [
      {
        x: new Date("20 Mar 2020").getTime(),
        strokeDashArray: 0,
        borderColor: "#5BDD20",
        label: {
          borderColor: "#5BDD20",
          style: {
            color: "#000",
            background: "#5BDD20",
          },
          text: "Inicio de cuarentena",
        },
      },
      {
        x: new Date("31 Mar 2020").getTime(),
        strokeDashArray: 0,
        borderColor: "#5BDD20",
        label: {
          borderColor: "#5BDD20",
          style: {
            color: "#000",
            background: "#5BDD20",
          },
          text: "Acá creiste que se terminaba",
        },
      },
      // {
      //   x: new Date("13 Abr 2020").getTime(),
      //   strokeDashArray: 0,
      //   borderColor: "#775DD0",
      //   label: {
      //     borderColor: "#775DD0",
      //     style: {
      //       color: "#fff",
      //       background: "#775DD0",
      //     },
      //     text: "Acá tampoco :)",
      //   },
      // },
      // {
      //   x: new Date("20 Mar 2020").getTime(),
      //   x2: new Date("15 Mar 2020").getTime(),
      //   fillColor: "#B3F7CA",
      //   opacity: 0.4,
      //   label: {
      //     borderColor: "#B3F7CA",
      //     style: {
      //       fontSize: "10px",
      //       color: "#fff",
      //       background: "#00E396",
      //     },
      //     offsetY: -10,
      //     text: "X-axis range",
      //   },
      // },
    ],
    points: [
      // {
      //   x: new Date("25 Mar 2020").getTime(),
      //   y: 8607.55,
      //   marker: {
      //     size: 8,
      //     fillColor: "#fff",
      //     strokeColor: "red",
      //     radius: 2,
      //     cssClass: "apexcharts-custom-class",
      //   },
      //   label: {
      //     borderColor: "#FF4560",
      //     offsetY: 0,
      //     style: {
      //       color: "#fff",
      //       background: "#FF4560",
      //     },
      //     text: "Point Annotation",
      //   },
      // },
      {
        x: new Date("30 Mar 2020").getTime(),
        y: 1054,
        marker: {
          size: 0,
        },
        image: {
          path: "https://i.imgur.com/ts1dEWb.png", // TODO: Cara de fernandez
        },
      },
    ],
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    padding: {
      right: 20,
      left: 20,
    },
  },
  title: {
    text: "Curva de casos totales",
    align: "left",
  },
  // labels: series.monthDataSeries1.dates,
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    x: {
      formatter: function (val) {
        return new Date(val).toLocaleDateString();
      },
    },
  },
};
