import React from 'react'
import { BellFilled} from '@ant-design/icons';
import {Collapse } from "antd";
import './notification.css'
import {IoMdNotifications} from 'react-icons/io'
const { Panel } = Collapse;

const Notifications = () => {



    const callback = (key) => {
        console.log(key);
      }

    return (
        <div className='notificationDiv'>
            <Collapse style={{ marginTop: -8,position:'relative',zIndex:10 }} expandIcon={() => { }} ghost='true' expandIconPosition='right' defaultActiveKey={['0']} onChange={callback}>
                <Panel  showArrow='false' header={<IoMdNotifications style={{ fontSize: 29, width: 40 }} key="edit" />} key="1">
                    <div className='notificationPanel' >hsdsdhjsd</div>









                    
                </Panel>

            </Collapse>
        </div>
    )
}

export default Notifications
