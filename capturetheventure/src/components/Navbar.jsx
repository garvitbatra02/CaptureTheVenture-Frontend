import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
      <Container>
          <Wrapper>
                <Left>
                    <Logo>CaptureTheVenture</Logo>
                    <MenuItemLeft>Job</MenuItemLeft>
                    <MenuItemLeft>Startup</MenuItemLeft>
                    <MenuItemLeft>Investment</MenuItemLeft>
                </Left>
                <End>
                    <MenuItemRight>Join</MenuItemRight>
                    <MenuItemRight>Signup</MenuItemRight>
                </End>
          </Wrapper>
      </Container>
  );
};

const Container = styled.div`
    height: 50px;
    background-color: black;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center
`
const Logo = styled.span`
    color: #4dd9fd;
    font-size: 20px;
    margin-left: 60px;
    margin-right: 60px;
`
const MenuItemLeft = styled.div`
    color: white;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const End = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItemRight = styled.div`
    color: white;
    cursor: pointer;
    margin-right: 20px;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
`
export default Navbar;
