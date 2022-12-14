import { observer } from 'mobx-react-lite';
import {Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer( function NavBar(){
    const {activityStore} = useStore();
    return (
        <Menu inverted fixed= 'top'>
            <Container>
                <Menu.Item header>
                    <img src ="/assets/logo.png" alt="logo" style={{marginRight:'20px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activity'/>

                <Menu.Item>
                    <Button onClick={()=> activityStore.openForm()} positive content='Create Activity'/>
                </Menu.Item>

            </Container>
        </Menu>
    )
})