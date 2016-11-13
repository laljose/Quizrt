/*-----------------------------------Start importing--------------------------------------------------*/ 
import React from 'react'
import Avatar from 'material-ui/Avatar'
import {AppBar, Tabs, Tab} from 'material-ui'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
/*-----------------------------------End of importing--------------------------------------------------*/ 
/*-----------------------------------Start Style-------------------------------------------------------*/ 
const style={
      width: '100%',
      margin: '3px'
    }
/*-----------------------------------End of Style-------------------------------------------------------*/ 

/*-----------------------------------Start class Nav----------------------------------------------------*/ 

{/*-----------------------------------Strart of function Questions--------------------------------------*/}
function Questions(){
  return(
          <div className='container' style={style}>
          <div className='row'>
            <div className='col-sm-4'>
            </div>
            <div className='col-sm-4'>
              <RaisedButton label="Physics and Chemistry" secondary={true} style={style} />
              <RaisedButton label="Physiology or Medicine" secondary={true} style={style} />
              <RaisedButton label="Literature, Peace and Economics" secondary={true}  style={style} />
              <RaisedButton label="All of the above" secondary={true} style={style} />
            </div> 
            <div className='col-sm-4'>
            </div>
          </div>
        </div>
        );
}

{/*-----------------------------------start of Card Function----------------------------------------------*/}
function CardFun(){
  return(
        <Card>
          <CardMedia
            overlay={<CardTitle title="For which of the following disciplines is Nobel Prize awarded?" 
            subtitle="Question 1" />}>
            <img src="media/images/classicbackground.jpg" />
          </CardMedia>
          <CardTitle subtitle="Choose your answer" />
        </Card>
        );
}

{/*-----------------------------------tart of Notification Function--------------------------------------*/}
function NotificationFun(){
  return(
        <Badge badgeContent={10}  secondary={true} badgeStyle={{top: 12, right: 12}}> 
          <IconButton tooltip="Notifications">   <NotificationsIcon /> </IconButton> 
        </Badge>
        );
}

/*-----------------------------------Start class Nav----------------------------------------------------*/ 
export default class Nav extends React.Component {
  constructor(props) {
   super(props);
   this.state = {open: false};
 }

 handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  render() {
    return (
      <div>

{/*-----------------------------------start of Drawer--------------------------------------------------------*/}
        <Drawer
           docked={false}
           width={250}
           open={this.state.open}
           onRequestChange={(open) => this.setState({open})}>
           <MenuItem onTouchTap={this.handleClose} style={{margin:"auto"}}>
           <Avatar size={200} src="media/images/usericon.png" /></MenuItem>
           <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>

{/*-----------------------------------End of Drawer---------------------------------------------------------*/}
{/*-----------------------------------Start of AppBar--------------------------------------------------------*/}

         <AppBar title="QuizART" onLeftIconButtonTouchTap={this.handleToggle} 
           titleStyle={{textAlign: "center"}}
           iconElementRight={
              <NotificationFun/>
          }
          iconClassNameRight="muidocs-icon-navigation-expand-more"/>

{/*-----------------------------------End of AppBar--------------------------------------------------------*/}
{/*-----------------------------------Start of Card-------------------------------------------------------*/}
        <CardFun/>
{/*-----------------------------------End of Card--------------------------------------------------------*/} 
{/*-----------------------------------Start Question container--------------------------------------------*/} 
        <Questions/>
      </div>
/*-----------------------------------End of main div-----------------------------------------------------*/  
    )
  }
}
/*-----------------------------------End class Nav------------------------------------------------------*/ 