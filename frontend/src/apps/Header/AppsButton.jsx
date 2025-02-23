import { Avatar, Button, Flex, Popover } from 'antd';

import { AppstoreOutlined } from '@ant-design/icons';
import { useAppContext } from '@/context/appContext';
import useLanguage from '@/locale/useLanguage';

// import Notifications from '@/components/Notification';







export default function AppsButton() {
  const { state: stateApp, appContextAction } = useAppContext();
  const { app } = appContextAction;

  const translate = useLanguage();
  const Content = () => {
    return (
      <div
        className="pad20"
        style={{
          maxWidth: '220px',
        }}
      >
        <Flex gap="middle" vertical>
          <Flex gap="middle">
            <Button type="primary" onClick={() => app.open('expenseApp')}>
              Expense
            </Button>
            <Button onClick={() => app.default()}>Default</Button>
            <Button type="dashed">Dashed</Button>
          </Flex>
        </Flex>
      </div>
    );
  };

  return (
    <Popover
      content={<Content />}
      trigger="click"
      style={
        {
          // marginRight: '20px',
        }
      }
    >
      <Avatar
        icon={<AppstoreOutlined />}
        style={{
          color: '#f56a00',
          backgroundColor: '#FFF',
          float: 'right',
          marginTop: '5px',
          cursor: 'pointer',
        }}
      />
    </Popover>
  );
}

//  console.log(
//    '🚀 Welcome to CIGNITI ERP CRM! Did you know that we also offer commercial customization services? Contact us at hello@idurarapp.com for more information.'
//  );
