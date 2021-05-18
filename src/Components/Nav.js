import { Header, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router';

const Nav = ({ logged_in, history }) => {

  return (
    <>
      <div className={'nav-bar-image'} >
        <Header as='h2' icon textAlign='center'>

          <Header.Content>Kaiflix</Header.Content>
        </Header>
      </div>

      <Menu secondary>
        <Menu.Item name='Browse' onClick={() => history.push('/browse')} />
        {
          !logged_in && (
            <>
              <Menu.Item onClick={() => history.push('/')} name='login' />
              <Menu.Item onClick={() => history.push('/signup')} name='signup' />
            </>
          )
        }
        {
          logged_in && (
            <>
            <Menu.Item name='my_cart' onClick={() => history.push('/mycart')} />
            <Menu.Item onClick={() => history.push('/logout')} name='logout' />
            </>
          )
        }
      </Menu>
    </>
  )
}

export default withRouter(Nav);