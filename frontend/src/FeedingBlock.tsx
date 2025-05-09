import { Row, Col, Button, Space } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './styles/FeedingBlock.css'

const timeTextStyles = { fontWeight: 500, fontSize: 28 };
const amountTextStyles = { fontSize: 24, color: '#ccc' }
const editButtonStyles = { backgroundColor: '#4F6DFF', border: 'none', color: 'white' }
const deleteButtonStyles = { backgroundColor: '#FF5E5E', border: 'none', color: 'white' }

function FeedingBlock({ time, amount }: any) {
    return (
        <Row align="middle" className='card'>
            <Col style={{ textAlign: 'center' }} span={12}>
                <div className="entry">
                    <div style={timeTextStyles}>{time}</div>
                    <div style={amountTextStyles}>{amount} ml</div>
                </div>
            </Col>
            <Col span={8} offset={4} style={{ textAlign: 'center' }}>
                <Space size="middle">
                    <Button
                        icon={<EditOutlined />}
                        shape="circle"
                        size="large"
                        style={editButtonStyles}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        shape="circle"
                        size="large"
                        style={deleteButtonStyles}
                    />
                </Space>
            </Col>
        </Row>
    )
}

export default FeedingBlock
