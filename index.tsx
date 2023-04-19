import Styles from '../../styles/Login.module.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input, } from 'antd';
import React from 'react';
import { Layout, Menu, theme, Image } from 'antd';
const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <div >
        <Header className={Styles.header} >
          <Menu />
          <div className={Styles.header_text}> HU PROJECT TRACK</div>
        </Header>
      </div>
      <div className={Styles.side_text}>
        <h1 style={{ fontSize: 49 }}>HU</h1>
        <h3>PROJECT TRACKER</h3>
      </div>
      <div className={Styles.side_img} >
        <Image src={`/undrawSE.png`} alt="Undraw Software Engineer" width={380} height={277}
        />
      </div>
      <div >



      </div>
      <Content className={Styles.contentreset}>
        <div >
          <Form className={Styles.form_login}
            layout="vertical"
            name="normal_login"
            autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
>
 
            {/* The color of the text need to be changed to white */}
            <Form.Item
              label="User Name"
              name="username"
              rules={[{ required: true, message: 'This field is mandatory' },{ whitespace: true }]}
              hasFeedback>
              <Input />
              <hr className={Styles.hr}/>
            </Form.Item>
{/* The color of the text need to be changed to white */}
            <Form.Item className={Styles.password}
              label="Password"
              name="password"
              rules={[{ required: true, message: 'This field is mandatory' }]}
              hasFeedback>
              <Input.Password />


              <hr className={Styles.hr}/>
            </Form.Item>
            <Form.Item className={Styles.password}
              label="New Password"
              name="newpassword"
              rules={[{ required: true, message: 'This field is mandatory' }]}
              hasFeedback>
              <Input.Password />


              <hr className={Styles.hr}/>
            </Form.Item>
            <Form.Item className={Styles.password}
              label="Confirm Password"
              name="confirmpassword"
              dependencies={['newpassword']}
              rules={[
                { required: true, message: 'This field is mandatory' },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newpassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
            ]}
            hasFeedback>
              <Input.Password />


              <hr className={Styles.hr}/>
            </Form.Item>
            <div className={Styles.btns}>
              <Form.Item >


                <Button htmlType="reset" className={Styles.reset} >
                  Reset
                </Button>
                </Form.Item>
                <Form.Item >
                <Button htmlType="submit" type="primary" className={Styles.confirm}>
                  Confirm
                </Button>

              </Form.Item>
            </div>

          </Form>
        </div>

      </Content>
    </Layout>
  );
};

export default App;