import React from 'react';
import { FiBriefcase, FiCode, FiFolder, FiHome, FiUser } from 'react-icons/fi';
import { SectionKey } from '../../data/mockApi';
import { MobileTabBar, MobileTabBtn, MobileTabLabel } from './elements';

const navItems: Array<{ key: SectionKey; label: string; icon: React.ReactNode }> = [
  { key: 'home', label: 'Home', icon: <FiHome /> },
  { key: 'about', label: 'About', icon: <FiUser /> },
  { key: 'skills', label: 'Skills', icon: <FiCode /> },
  { key: 'experience', label: 'Experience', icon: <FiBriefcase /> },
  { key: 'work', label: 'Work', icon: <FiFolder /> },
];

type Props = {
  active: SectionKey;
  loading: boolean;
  onSelect: (key: SectionKey) => void;
};

export function MobileNav({ active, loading, onSelect }: Props) {
  return (
    <MobileTabBar>
      {navItems.map((item) => (
        <MobileTabBtn
          key={item.key}
          active={active === item.key}
          disabled={loading}
          onClick={() => !loading && onSelect(item.key)}
        >
          {item.icon}
          <MobileTabLabel>{item.label}</MobileTabLabel>
        </MobileTabBtn>
      ))}
    </MobileTabBar>
  );
}
