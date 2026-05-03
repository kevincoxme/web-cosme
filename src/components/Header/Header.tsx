import React, { useState } from 'react';
import {
  Grid,
  HeaderContainer,
  Nav,
  NavActions,
  NavItem,
  NavLink,
  NavList,
  NavLogo,
  NavMenu,
  NavToggle,
  ThemeToggle,
} from './elements';
import { Box } from '@mui/material';
import { useGlobalHook } from '@/hooks/useGlobalHook';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navItems = ['home', 'about', 'skills', 'experience', 'work', 'contact'];

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useGlobalHook();
  const [menuOpen, setMenuOpen] = useState(false);
  const { hash } = useLocation();

  useScrollSpy(navItems);

  return (
    <HeaderContainer>
      <Grid>
        <Nav>
          <Box>
            <NavLogo href="#" underline="none">
              Web Cosme
            </NavLogo>
          </Box>
          <NavMenu open={menuOpen}>
            <NavList>
              {navItems.map((id) => (
                <NavItem key={id}>
                  <NavLink
                    href={`#${id}`}
                    isActive={hash.includes(id)}
                    underline="none"
                    onClick={() => setMenuOpen(false)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </NavMenu>
          <NavActions>
            <ThemeToggle aria-label="Toggle theme" onClick={toggleTheme}>
              {isDark ? <FaMoon /> : <FaSun />}
            </ThemeToggle>
            <NavToggle onClick={() => setMenuOpen((v) => !v)} aria-hidden="true">
              <FaBars />
            </NavToggle>
          </NavActions>
        </Nav>
      </Grid>
    </HeaderContainer>
  );
};
