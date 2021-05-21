import { Header, Menu } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import { withRouter } from 'react-router';


const Nav = ({ logged_in, history }) => {
  return (
    <>
      <div className="nav-bar-image" >
        <Header as='h2' icon textAlign='center'>

          <Header.Content>Apex</Header.Content>
        </Header>
      </div>

      <Menu secondary>
        {
          !logged_in && (
            <>
              <Menu.Item className='nav-bar-content' onClick={() => history.push('/')} name='login' />
              <Menu.Item className='nav-bar-content' onClick={() => history.push('/signup')} name='signup' />
            </>
          )
        }
        {
          logged_in && (
            <>
            <Menu.Item className='nav-bar-content' name='Browse' onClick={() => history.push('/items')} />
            <Menu.Item className='nav-bar-content' name='my_cart' onClick={() => history.push('/mycart')}/>
            <Menu.Item className='nav-bar-content' onClick={() => history.push('/logout')} name='logout' />
            </>
          )
        }
      </Menu>
    </>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//   };
// };


export default withRouter(Nav);