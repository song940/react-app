import React from 'react';
import {
  Row,
  Col,
  Card,
} from 'antd';

class Overview extends React.Component {
  render(){
    return (
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
      </Row>
    );
  }
}

export default Overview;