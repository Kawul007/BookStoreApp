import React, { useContext, useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Popover, Form } from 'antd';
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;


//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{
//           paddingRight: 24,
//         }}
//         onClick={toggleEdit}
//       >
//         {children}
//       </div>
//     );
//   }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '图书名称',
        dataIndex: 'book_name',
        width: '20%',
        editable: false,
        align:'center',
      },
      {
        title: '库存量',
        dataIndex: 'book_storage',
        align:'center',
      },
      {
        title: '图书价格',
        dataIndex: 'book_price',
        align:'center',
        sorter: (a, b) => a.book_price - b.book_price,
      },
      {
        title: '操作管理',
        dataIndex: 'operation',
        align:'center',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <div>
              {/* <Button style={{}}>删除</Button> */}
              <Button style={{marginLeft:20,background:"green",width:150}}>更新</Button>
              <Button style={{marginLeft:20,background:"red",width:150}}>下架</Button>
            </div>
          ) : null,
      },
    ];
    
   
    this.state = {
      dataSource: [
//     //     // {
//     //     //   key: '0',
//     //     //   name: 'Edward King 0',
//     //     //   age: '32',
//     //     //   address: 'London, Park Lane no. 0',
//     //     // },
//     //     // {
//     //     //   key: '1',
//     //     //   name: 'Edward King 1',
//     //     //   age: '32',
//     //     //   address: 'London, Park Lane no. 1',
//     //     // },
      ],
      count: 2,
    };
  };
//   const [dataSource,setDataSource] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:8080/bookitem/getAll")
//       .then((res) => res.json())
//       .then((result) => {
//         setDataSource(result);
//       });
//   }, []); 

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
//   handleAdd = () => {
//     const { count, dataSource } = this.state;
//     const newData = {
//       key: count,
//       name: `Edward King ${count}`,
//       age: '32',
//       address: `London, Park Lane no. ${count}`,
//     };
//     this.setState({
//       dataSource: [...dataSource, newData],
//       count: count + 1,
//     });
//   };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}
export default () => <EditableTable />;