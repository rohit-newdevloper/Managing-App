import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListView,
} from 'react-native';
import ListItem from './ListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    const { empFetch } = this.props;

    empFetch();
    this.createDatatSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be renderd with,
    // this.props is still the old set of props
    this.createDatatSource(nextProps);
  }

  createDatatSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    const { employees } = this.props;
    console.log(employees);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { empFetch: employeesFetch })(EmployeeList);
