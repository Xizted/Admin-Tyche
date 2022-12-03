import { Tab } from '@src/interfaces/Tab';
import { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

interface TabsVerticalLeftProps {
  tabs: Tab[];
}

const TabsVerticalLeft = ({ tabs }: TabsVerticalLeftProps) => {
  const [active, setActive] = useState('1');

  const toggle = (tab: string) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <div className='nav-vertical'>
      <Nav tabs className='nav-left'>
        {tabs.map(({ id, title }) => (
          <NavItem key={id}>
            <NavLink
              active={active === id}
              onClick={() => {
                toggle(id);
              }}
            >
              {title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={active}>
        {tabs.map(({ id, Element }) => (
          <TabPane key={id} className='overflow-hidden' tabId={id}>
            {Element}
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default TabsVerticalLeft;
