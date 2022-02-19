import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Table ,Space , Button} from 'antd';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { connect } from "react-redux";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { fetch } from "../actions/crud";

// const post = [];
import { mail } from "../actions/crud";
// import Left from './Left';
const { Column } = Table;
// const form = {Emp_Id : 123};


const Leave= () =>
{
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  const dispatch = useDispatch();

  const form = {Emp_Id :user?.result.Emp_Id};

  const finish =(props) =>{
    console.log(props);
      dispatch(mail(props));
  }


  const post = useSelector((state) => state.fetch.data);
  console.log(post);

  useEffect(() => {
    // console.log("hi");
    setLoading(false);
      dispatch(fetch({"Emp" : "1"}));
  } ,[dispatch ]);

  // post.push(posts);
  useEffect(() => {
    // console.log(post);
    if(post){
      // console.log(post);
      // const q = post;
      setPosts(post);
      // console.log(posts);
      setLoading(true);
    }
  });
  console.log(posts);

  if(loading){
   
    return(
      <div>
               <Table dataSource={posts}>
      <Column title="Name" dataIndex="Name" key="Name" />
      <Column title="Email" dataIndex="Email" key="Email" />
      <Column title="Contact" dataIndex="Contact" key="Contact" />
      <Column title="DOB" dataIndex="DOB" key="DOB" />
      <Column title="Age" dataIndex="Age" key="Age" />
      <Column title="Occupation" dataIndex="Occupation" key="Occupation" />
      <Column title="Hobbies" dataIndex="Hobbies" key="Hobbies" />

          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <Button type="link" onClick = {() => finish(record)}>
                  View More
                </Button>
              </Space>
            )}
          />
        </Table>
      </div>

  );
  }
  else {
    return(
      <div>
        wait
      </div>
    )
  }

};



export default Leave;


// const data = [
//   {
//     key:"1",
//     Company: "hi",
//     Department: "cse",
//     Firstname: "chethan",
//     Lastname: "rao",
//     LeaveReason: "Health Issues",
//     Leavetype: "Paid",
//     Organization: "mahindra",
//     RequestedLeave: "2",
//     email: "chethanrao999@gmail.com",
//     phone: "9876434312",
//     status:"pending",
//     from : "2021-10-07 22:05:24",
//     to : "2021-10-08 22:05:30",    
//   },
//   {
//     key: '2',
//     Company: "hi",
//     Department: "cse",
//     Firstname: "chethan",
//     Lastname: "rao",
//     LeaveReason: "Health Issues",
//     Leavetype: "Paid",
//     Organization: "mahindra",
//     RequestedLeave: "2",
//     email: "chethanrao999@gmail.com",
//     phone: "9876434312",
//     status:"pending",
//     from : "2021-10-07 22:05:24",
//     to : "2021-10-08 22:05:30",
//   },
//   {
//     key: '3',
//     Company: "hi",
//     Department: "cse",
//     Firstname: "chethan",
//     Lastname: "rao",
//     LeaveReason: "Health Issues",
//     Leavetype: "Paid",
//     Organization: "mahindra",
//     RequestedLeave: "2",
//     email: "chethanrao999@gmail.com",
//     phone: "9876434312",
//     status:"pending",
//     from : "2021-10-07 22:05:24",
//     to : "2021-10-08 22:05:30",
//   },
// ];

  // const isWebDevice = useMediaQuery('(min-width:700px)');
  // const deviceColumns = [
  //     {
  //       title: "Student Data",
  //       render: (record, key, index) => {
  //          const from = record.From;
  //          const to = record.To;
  //          const Leave_Applied_Date = record.Leave_Applied_Date;
  //          const Leave_Category = record.Leave_Category;
  //          const status = record.is_Approved;
  //          return (
  //              <div>
  //                   <span>
  //                         <h4>From</h4>
  //                         <h4>{from}</h4>
  //                   </span>
  //                   <span>
  //                         <h4>To</h4>
  //                         <h4>{to}</h4>
  //                   </span>
  //                   <span>
  //                         <h4>Leave_Applied_Date</h4>
  //                         <h4>{Leave_Applied_Date}</h4>
  //                   </span>
  //                   <span>
  //                         <h4>LeaveType</h4>
  //                         <h4>{Leave_Category}</h4>
  //                   </span>
  //                   <span>
  //                         <h4>status</h4>
  //                         <h4>{status}</h4>
  //                   </span>
  //              </div>
  //          )
  //       }
  //   }
  //   ];

    // const columns = [
    //   {
    //     title: "Name",
    //     dataIndex: "Name",
    //   },
    //   {
    //     title: "Email",
    //     dataIndex: "Email",
    //   },
    //   {
    //     title: "Contact",
    //     dataIndex: "Contact",
    //   },
    //   {
    //     title: "Age",
    //     dataIndex: "Age",
    //   },
    //   {
    //     title: "DOB",
    //     dataIndex: "DOB",
    //   },
    //   {
    //     title: "Occupation",
    //     dataIndex: "Occupation",
    //   },
    //   {
    //       title: "Hobbies",
    //       dataIndex: "Hobbies",
    //     },
    // ];