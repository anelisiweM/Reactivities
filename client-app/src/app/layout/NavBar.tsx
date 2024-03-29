import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import {Button, Container, Menu } from 'semantic-ui-react';
export default observer( function NavBar(){
    return (
        <Menu inverted fixed= 'top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src ="/assets/logo.png" alt="logo" style={{marginRight:'20px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities'  name='Activity'/>
                <Menu.Item>
                    <Button  as={NavLink} to='/createActivity'  positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
})