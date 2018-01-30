import React from "react";
import { Widget } from "@dashbling/client/Widget";
import { FrappeChart } from "../components/FrappeChart";


export const GitHubIssueStats = (props) => {
  const data = {
    labels: ["Open", "Closed"],
    datasets: [
        {
            values: [props.openIssues, props.closedIssues]
        }
    ]
  };

  return (
    <Widget
      style={{ backgroundColor: "#24292e" }}
      href={`https://github.com/${props.repo}/issues`}
    >
      <div>
        <img style={{ height: 35, width: 35 }} src={require("./gitHubStars/github.svg")}/>
        <p>{props.repo}</p>
      </div>

      <FrappeChart title="Issues" type="percentage" data={data} />
    </Widget>
  );
};