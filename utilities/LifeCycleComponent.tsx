import { Component } from "react";
import moment from "moment";

class LifeCycleComponent extends Component {
  UNSAFE_componentWillMount() {
    console.log(
      moment().format("HH:mm:ss.SSS") +
        ": " +
        this.constructor.name +
        ": componentWillMount"
    );
  }
  componentDidMount() {
    console.log(
      moment().format("HH:mm:ss.SSS") +
        ": " +
        this.constructor.name +
        ": componentDidMount"
    );
  }
  UNSAFE_componentWillReceiveProps() {
    console.log(
      moment().format("HH:mm:ss.SSS") +
        ": " +
        this.constructor.name +
        ": componentWillReceiveProps"
    );
  }
  UNSAFE_componentWillUpdate() {
    console.log(
      moment().format("HH:mm:ss.SSS") +
        ": " +
        this.constructor.name +
        ": componentWillUpdate"
    );
  }
  componentDidUpdate() {
    console.log(
      moment().format("HH:mm:ss.SSS") +
        ": " +
        this.constructor.name +
        ": componentDidUpdate"
    );
  }
  componentWillUnmount() {
    console.log(
      moment().format("HH:mm:ss.SSS") +
        ": " +
        this.constructor.name +
        ": componentWillUnmount"
    );
  }
}

export default LifeCycleComponent;
