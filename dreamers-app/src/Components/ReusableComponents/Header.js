import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar , Avatar, Drawer, MenuItem, Divider}  from 'material-ui';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

 export default class Header extends React.Component {
   render(){
     console.log("path", __dirname)
     return(
       <div>
           <AppBar
             title={this.props.title}
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             onLeftIconButtonTouchTap={() => this.props.setValue()}
           />
           <Drawer
             docked={false}
             width={300}
             onRequestChange={() => this.props.setValue()}
             open={this.props.open}
           >

         <Divider/>
             {this.props.authenticated ? (
               <div>
                 <Avatar
                   src = '../../../public/images/joe.jpg'
                   size = {100}
                />
               <MenuItem
                 primaryText="My Dreams"
                 style={{color:'#ffffff'}}
                 containerElement={<Link to="/Dreams" />}
                 onTouchTap={() => this.props.update("My Dreams")}
               />
               <MenuItem
                 primaryText="New Dream"
                 style={{color:'#ffffff'}}
                 containerElement={<Link to="/NewDream" />}
                 onTouchTap={() => this.props.update("New Dream")}
               />
               <MenuItem
                 primaryText="Settings"
                 style={{color:'#ffffff'}}
                 containerElement={<Link to="/Settings" />}
                 onTouchTap={() => this.props.update("Settings")}
               />
               <MenuItem
                 primaryText="LogOut"
                 style={{color:'#ffffff'}}
                 containerElement={<Link to="/logout" />}
                 onTouchTap={() => this.props.update("Logout")}
               /></div>
             ) : (
               <div>
               <MenuItem
                 primaryText="Login"
                 style={{color:'#ffffff'}}
                 containerElement={<Link to="/Login" />}
                 onTouchTap={() => this.props.update("Login")}
               />
               <MenuItem
                  primaryText="SignUp"
                  style={{color:'#ffffff'}}
                  containerElement={<Link to="/signup" />}
                  onTouchTap={() => this.props.update("SignUp")}
                />
             </div>
             )}
           </Drawer>

           <div style={{ textAlign: 'center' }}>
             {this.props.children}
           </div>
         </div>
    );
  }
}
