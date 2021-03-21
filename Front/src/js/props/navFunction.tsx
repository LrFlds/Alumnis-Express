import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../../models/user'
import { Link } from 'react-router-dom';
import logout from '../fetchs/logout'
import getConnectedUser from '../fetchs/getConnectedUser';
import { Layout, Menu, Avatar, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  InsertRowBelowOutlined,
  WhatsAppOutlined,
  ContactsOutlined,
  BankOutlined,
  DashboardOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Nav: FunctionComponent = () => {

    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        async function getUser() {
            const user =  await getConnectedUser()
            setUser(user)
         }
         getUser();

    }, []);

    return (
        <div>
            {user ? (
                <div>
                      <Sider collapsible style={{position:'fixed', background:'#CE0033', height: '100vh', }}>
                          <div className="container-texte">
                      <Avatar style={{padding: '10px', marginTop: '0px', marginLeft: '0px', }} size={74} src={`${user.Picture}`} />
                      <h1>{user.Name}</h1>
                      <p> {user.FirstName}</p>
                      </div>
          <div className="logo" />
          <Menu style={{background:'#CE0033', color: 'white', marginTop: '100px', width: '100%', border: 'none',}} defaultSelectedKeys={['3']} mode="inline">
            <Menu.Item style={{marginTop: '20px', marginBottom: '20px'}} key="1" icon={<InsertRowBelowOutlined />}>
            <Link  style={{ color: 'white'}} to="/profil">Profil</Link>
            </Menu.Item>
            <Menu.Item style={{marginTop: '20px', marginBottom: '20px'}} key="2" icon={<WhatsAppOutlined />}>
            <Link style={{ color: 'white'}} to="/chat">Chat</Link>
            </Menu.Item>
            <Menu.Item style={{marginTop: '20px', marginBottom: '20px'}} key="3" icon={<ContactsOutlined />}>
            <Link  to="/Annuaire">Annuaire</Link>
            </Menu.Item>
            <Menu.Item style={{marginTop: '20px', marginBottom: '20px', color: 'white'}} key="4" icon={<BankOutlined />}>
            <Link style={{ color: 'white'}} to="/forum">Forum</Link>
            </Menu.Item>
            <Menu.Item style={{marginTop: '20px', marginBottom: '20px'}} key="5" icon={<DashboardOutlined />}>
            <Link style={{ color: 'white'}} to="/profil">Réglages</Link>
            </Menu.Item>
          </Menu>
        </Sider>
                    <div className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            ) : (
                    <h4 className="center">Aucun profil à afficher !</h4>
                )}
        </div>
    )
}

export default Nav