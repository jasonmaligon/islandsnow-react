import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Icon, Image, Grid, GridColumn, List, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image centered src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?15691486226381689305'/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Dropdown item text="MEN">
            <Dropdown.Menu>
              <Dropdown.Item>TANK TOPS</Dropdown.Item>
              <Dropdown.Item>SHIRTS</Dropdown.Item>
              <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="WOMEN">
            <Dropdown.Menu>
              <Dropdown.Item>TANK TOPS</Dropdown.Item>
              <Dropdown.Item>SHIRTS</Dropdown.Item>
              <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="KIDS">
            <Dropdown.Menu>
              <Dropdown.Item>SHIRTS</Dropdown.Item>
              <Dropdown.Item>ONESIES</Dropdown.Item>
              <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="BRANDS">
          </Dropdown>
          <Menu.Item fitted>SEARCH</Menu.Item>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid centered
               src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?15691486226381689305'/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <footer className="grey-background">
          <Container>
            <Grid centered columns="3">
              <GridColumn>
                <List>
                  NAVIGATION
                  <hr/>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </GridColumn>

              <GridColumn>
                <List>
                  MAIN MENU
                  <hr/>
                  <List.Item>Mens</List.Item>
                  <List.Item>Womens</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </GridColumn>

              <GridColumn>
                <List>
                  CONNECT
                  <hr/>
                  <List.Item>Sign up for the latest updates</List.Item>
                  <List.Item>
                    <Input placeholder="Enter Email Address">
                    </Input>
                    <Button color="black">
                      Join
                    </Button>
                  </List.Item>
                </List>
              </GridColumn>
            </Grid>
          </Container>
        </footer>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
