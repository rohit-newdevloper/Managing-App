import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import {
  Card,
  CardSection,
  Button,
  Confirm,
} from './common';

class EmployeeEdit extends Component {
  state = {
    showModal: false,
  };

  componentWillMount() {
    const { employee, empUpdate } = this.props;

    _.each(employee, (value, prop) => {
      empUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {
      name,
      phone,
      shift,
      empSave,
      employee,
    } = this.props;

    const { uid } = employee;

    empSave({
      name,
      phone,
      shift,
      uid,
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { empDelete, employee } = this.props;

    empDelete(employee);
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;

    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !showModal })}>Fire Employee</Button>
        </CardSection>

        <Confirm
          visible={showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  empUpdate: employeeUpdate,
  empSave: employeeSave,
  empDelete: employeeDelete,
})(EmployeeEdit);
