import React from "react";
import Frappe from "frappe-charts/dist/frappe-charts.min.esm";

import "./Frappe.scss";

export class FrappeChart extends React.Component {
  componentDidMount() {
    const { title, type, data, ...rest } = this.props;

    this.frappe = new Frappe({
      parent: this.domEl,
      title,
      data,
      type,
      ...rest
    });
  }

  componentWillReceiveProps(nextProps) {
    try{
      this.frappe.update_values(nextProps.data.datasets, nextProps.data.labels)
    } catch(e) {
      this.frappe.data = nextProps.data;
      this.frappe.refresh(true);
    }
}

  render() {
    return <div ref={domEl => this.domEl = domEl} />
  }
}
