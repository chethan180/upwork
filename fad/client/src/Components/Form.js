import React, { useEffect,useRef,useState } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Result,
} from 'antd';
import { DatePicker } from 'antd';
// import ReactDOM from 'react-dom';
// import {   TimePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {apply} from '../actions/crud';
import {useSelector} from 'react-redux';
import PickerButton from 'antd/lib/date-picker/PickerButton';
import {io} from 'socket.io-client';
import decode from 'jwt-decode';
import * as actionType from '../constants/actionTypes';
import generatePDF from './pdf';
// const { RangePicker } = DatePicker;



const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};




const Sforms = () => {
  
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useHistory();
  const today = Date.now();
  // const [socket,setSocket] = useState(null);






  const post = useSelector((state) => state.crud.data);
  console.log(post);

  const onFinish = (values) => {
    const x =[];
    x.push(values)
    generatePDF(x);
    console.log('Received values of form: ', values);
    dispatch(apply(values));
    // form.resetFields();
  };

  // useEffect(() => {
  //   dispatch(apply(Values));
  // } ,[dispatch]);


  // useEffect(() => {
  //   if (Values) apply(Values);
  // }, [Values]);






  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );


  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      // name="nest-messages"
      onFinish={onFinish}
      initialValues={{
        prefix: '91',
      }}
      scrollToFirstError
    >


      <Form.Item name="DOB" label="DOB" 
        rules= {[
      {
        required: true,
        message: 'Please select Date!',
      },
      ]}
       >
        <DatePicker  format="YYYY-MM-DD" />
      </Form.Item>

              <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name ',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>  

      <Form.Item
        name="Email"
        label="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email ',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item> 

      <Form.Item
        name="Age"
        label="Age"
        rules={[
          {
            required: true,
            message: 'Please input your Age ',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Contact"
        label="Contact"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="Occupation"
        label="Occupation"
        rules={[
          {
            required: true,
            message: 'Please input your Occupation ',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>



      <Form.Item
        name="Hobbies"
        label="Hobbies"
        rules={[
          {
            required: true,
            message: 'Please select Hobbies!',
          },
        ]}
      >
        <Select placeholder="Hobbies">
          <Option value="Cricket">Cricket</Option>
          <Option value="Chess">Chess</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
        </Select>
      </Form.Item>

      <Form.Item name= "Remarks" label="Remarks">
        <Input.TextArea />
      </Form.Item>


      

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Apply
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Sforms;



