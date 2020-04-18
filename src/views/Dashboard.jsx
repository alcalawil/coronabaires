import React, { useEffect, useState } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import moment from "moment";
import axios from "axios";
// Components
import { Stats } from "components/Stats/Stats";
import DatePicker from "components/DatePicker/DatePicker";
import HBar from "components/Charts/HBar";
import VBar from "components/Charts/VBar";
import LineChart from "components/Charts/Line";
import Loading from "components/Loading/Loading";
import {
  getHBarData,
  formatVBarData,
  formatLineData,
} from "../util/formatChartData";

const DATE_FORMAT = "YYYY-MM-DD";

const Dashboard = () => {
  const [dailyStats, setDailyStats] = useState({});
  const [loaded, setLoaded] = useState(false);
  const minDate = "2020-03-03";
  const maxDate = moment().format(DATE_FORMAT); // TODO: improve this
  const [date, setDate] = useState(
    moment().subtract(1, "day").format(DATE_FORMAT)
  );

  const fetchData = async () => {
    try {
      const response = await axios(
        "https://argentina-covid19-data.now.sh/api/v0/daily"
      );

      setDailyStats(response.data || {});
      setLoaded(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const onDatePickerChange = (date) => {
    setDate(date.format(DATE_FORMAT));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { total_infections, total_deaths, new_cases, new_deaths } =
    dailyStats[date] || {};

  const dataHbar = getHBarData(dailyStats[date]);
  const dataVBar = formatVBarData(dailyStats);
  const lineData = formatLineData(dailyStats);
  const mortalityRate = ((total_deaths / total_infections) * 100).toFixed(2);
  return (
    <div className="content">
      {loaded ? (
        <Grid fluid>
          <Row>
            {dailyStats[date] ? (
              <Stats
                total_infections={total_infections}
                total_deaths={total_deaths}
                new_cases={new_cases}
                new_deaths={new_deaths}
                date={date}
                mortalityRate={`${mortalityRate}%`}
              />
            ) : (
              <h4>Lo sentimos. Esta data aún no está disponoble</h4>
            )}
          </Row>
          <hr />
          {/* Charts */}
          <Row>
            <Col md={6}>
              <LineChart
                labels={lineData.labels}
                data={lineData.data.totalCases}
                color="#15DAF4"
                name="Casos"
                title="Casos acumulados"
              />
            </Col>
            <Col md={6}>
              <LineChart
                labels={lineData.labels}
                data={lineData.data.totalDeaths}
                color="#FF0043"
                name="Muertes"
                title="Muertes acumuladas"
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <VBar
                name="Casos"
                title="Casos por día"
                labels={dataVBar.labels}
                data={dataVBar.series.newCases}
                color="#15DAF4"
              />
            </Col>
            <Col md={6}>
              <VBar
                name="Muertes"
                title="Muertes por día"
                labels={dataVBar.labels}
                data={dataVBar.series.newDeaths}
                color="#FF0043"
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={9}>
              <HBar data={dataHbar.data} labels={dataHbar.labels} />
            </Col>
          </Row>
          <hr />
          <Row>
            <h3>
              Algunas secciones siguen en construcción y estarán listas en los
              próximos días
            </h3>
          </Row>
        </Grid>
      ) : (
        <Loading />
      )}
      <DatePicker
        onChange={onDatePickerChange}
        minDate={minDate}
        maxDate={maxDate}
        defaultDate={date}
      />
    </div>
  );
};

export default Dashboard;
