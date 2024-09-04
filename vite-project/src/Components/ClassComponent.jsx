import React, { Component } from "react";

export default class ClassComponent extends Component {
  // tiene tres herramientas indispensables para gestionar el ciclo de vida del componente
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return <div>ClasComponent</div>;
  }
}
