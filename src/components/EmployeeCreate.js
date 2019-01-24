import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardSection,
  Button,
} from './common';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    const { empCreate } = this.props;

    empCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return {
    name,
    phone,
    shift,
  };
};

export default connect(mapStateToProps, {
  empUpdate: employeeUpdate,
  empCreate: employeeCreate,
})(EmployeeCreate);
