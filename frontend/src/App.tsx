import './App.css'
import FeedingBlock from './FeedingBlock'
import { Row, Col, Button, Modal, Divider, InputNumber } from 'antd'
import { LeftOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import 'uuid4';
import uuid4 from 'uuid4';

const API_URL = 'http://localhost:3000/feedings';

const navButtonStyles = {
  fontSize: 24,
  color: '#4F6DFF',
  cursor: 'pointer'
};
const dateStyles = {
  fontSize: 32,
  fontWeight: 600,
  color: '#ffffff'
};
const addButtonStyles = {
  width: 56,
  height: 56,
  fontSize: 24,
};

function App() {
  const [feeds, setFeeds]: any[] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchFeedings = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonObj = await response.json();
        const feedList: any = jsonObj
          .map((item: any) => (
            <FeedingBlock
              key={uuid4()}
              time={item.time}
              amount={item.amount}
            />
          ));

        setFeeds(...feeds, feedList)
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchFeedings();
  }, [])

  const onAddClick = () => {
    setIsModalOpen(true);
  }

  const onChange = () => {
    // Nothing
  }

  return (
    <div className="box">
      <Modal
        title="Set Amount"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InputNumber min={1} max={10} defaultValue={120} onChange={onChange} /> ml
        <Divider />
      </Modal>
      <Row>
        <Col span={8} offset={8}>
          <Row align="middle">
            <Col span={4}>
              <LeftOutlined style={navButtonStyles} />
            </Col>
            <Col span={16} style={{ textAlign: 'center' }}>
              <h1 style={dateStyles}>
                May 7 2025
              </h1>
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}>
              <RightOutlined style={navButtonStyles} />
            </Col>
          </Row>

          {feeds}

          <Row align="middle">
            <Col span={24} style={{ textAlign: 'center', marginTop: '1em' }}>
              <Button
                onClick={onAddClick}
                shape="circle"
                type="primary"
                icon={<PlusOutlined />}
                style={addButtonStyles}
              />
            </Col>
          </Row>
        </Col>
      </Row >
    </div >
  )
}

export default App
