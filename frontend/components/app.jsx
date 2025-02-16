
import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavContainer from './navigation/nav_container';
import BoardsIndexContainer from './boards/boards_index_container';
import BoardFormContainer from './boards/board_form_container';
import BoardsShowContainer from './boards/board_show_container';
import EditBoardFormContainer from './boards/edit_board_container';
import Modal from './modal/modal';
import Home from './home/home';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';



export default () => (
 

    <div>
        
        <Modal /> 
        
        {/* <div className="home">

         <Route exact path="/" component={Home} />
        </div> */}

        {/* <Route path="/" component={NavContainer} /> */}
        {/* <Route exact path="/" component={Home} /> */}
      
        <Switch>
             <AuthRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/boards" component={BoardsIndexContainer} /> 
            {/* <Route exact path="/" component={BoardsIndexContainer}/> */}
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={SigninContainer} />
            <ProtectedRoute exact path="/boards/:boardId" component={BoardsShowContainer} /> 
            <ProtectedRoute exact path="/boards/:boardId/edit" component={EditBoardFormContainer} />
            <ProtectedRoute exact path="/boards/new" component={BoardFormContainer} /> 

        </Switch>
       
    </div>  
         
  

)




