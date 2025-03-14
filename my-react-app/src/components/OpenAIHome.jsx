import { SearchOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Input } from 'antd';
import React from 'react';
import './OpenAIHome.css';

const OpenAIHome = () => {
  const sidebarItems = [
    'Research',
    'Safety',
    'ChatGPT',
    'Sora',
    'API Platform',
    'For Business',
    'Stories',
    'Company',
    'News'
  ];

  return (
    <ConfigProvider>
      <div className="openai-container">
        {/* 导航栏 */}
        <header className="header">
          <div className="logo">OpenAI</div>
          <div className="header-right">
            <SearchOutlined className="search-icon" />
            <Button type="text">Log in</Button>
          </div>
        </header>

        {/* 主要内容区域 */}
        <div className="main-content">
          {/* 侧边栏 */}
          <aside className="sidebar">
            {sidebarItems.map((item, index) => (
              <div key={index} className="sidebar-item">
                {item}
              </div>
            ))}
          </aside>

          {/* 中心内容区域 */}
          <main className="content">
            <h1 className="main-title">What can I help with?</h1>
            <div className="search-container">
              <Input
                size="large"
                placeholder="Explica por qué el maíz palomitas explota"
                suffix={<SearchOutlined />}
              />
            </div>
            <div className="action-buttons">
              <Button>Search with ChatGPT</Button>
              <Button>Talk with ChatGPT</Button>
              <Button>Research</Button>
              <Button>Sora</Button>
              <Button>More</Button>
            </div>
          </main>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default OpenAIHome;
