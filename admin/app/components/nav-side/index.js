import React, {Component} from 'react';

import {Menu, Icon, Button} from 'antd';

import './index.scss';

class NavSide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		}
	}
	
	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

    render() {
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;

        return (
            <div className={this.state.collapsed ? 'nav-side fold' : 'nav-side unfold'}>
				<Button className="toggle-button" type="primary" onClick={this.toggleCollapsed}>
					<Icon type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'} />
				</Button>
                <Menu
					mode="inline"
					theme="dark"
					inlineCollapsed={this.state.collapsed}
				>
					<SubMenu key="sub1" 
						title={
							<span>
								<Icon type="file-text" />
								<span>文章管理</span>
							</span>
						}
					>
						<Menu.Item key="1"><Icon type="caret-right" />文章列表<Icon type="right" /></Menu.Item>
						<Menu.Item key="2"><Icon type="caret-right" />文章添加<Icon type="right" /></Menu.Item>
						<Menu.Item key="3"><Icon type="caret-right" />文章分类<Icon type="right" /></Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" 
						title={
							<span>
								<Icon type="inbox" />
								<span>收藏管理</span>
							</span>
						}
					>
						<Menu.Item key="4"><Icon type="caret-right" />收藏列表<Icon type="right" /></Menu.Item>
						<Menu.Item key="5"><Icon type="caret-right" />收藏添加<Icon type="right" /></Menu.Item>
					</SubMenu>
					<SubMenu key="sub3" 
						title={
							<span>
								<Icon type="share-alt" />
								<span>说说管理</span>
							</span>
						}
					>
						<Menu.Item key="6"><Icon type="caret-right" />说说列表<Icon type="right" /></Menu.Item>
						<Menu.Item key="7"><Icon type="caret-right" />说说添加<Icon type="right" /></Menu.Item>
					</SubMenu>
					<SubMenu key="sub4" 
						title={
							<span>
								<Icon type="user" />
								<span>个人中心</span>
							</span>
						}
					>
						<Menu.Item key="8"><Icon type="caret-right" />密码修改<Icon type="right" /></Menu.Item>
					</SubMenu>
                </Menu>
            </div>
        )
    }
}

export default NavSide;