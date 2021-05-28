import { Header, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const Nav = ({ history, orders }) => {
  return (
    <>
      <div className="App-logo">
        <Header as="h2" icon textAlign="left">
          <Header.Content>Apex</Header.Content>
        </Header>
      </div>

      <Menu secondary>

        <Menu.Item
              className="nav-bar-content"
              name="Browse"
              onClick={() => history.push("/items")}
            />

        {!localStorage.getItem('token') && (
          <>
            <Menu.Item
              className="nav-bar-content"
              onClick={() => history.push("/")}
              name="login"
            />
            <Menu.Item
              className="nav-bar-content"
              onClick={() => history.push("/signup")}
              name="signup"
            />
          </>
        )}
        {localStorage.getItem('token') && (
          <>
            
            <Menu.Item
              className="nav-bar-content"
              name="my_cart"
              onClick={() => history.push("/mycart")}
              >My Cart ({orders.length})
            </Menu.Item>
            <Menu.Item
              className="nav-bar-content"
              name="my_account"
              onClick={() => history.push("/profile")}
            />
            <Menu.Item
              className="nav-bar-content"
              onClick={() => history.push("/logout")}
              name="logout"
            />
          </>
        )}
      </Menu>
    </>
  );
};

const mapStateToProps = state => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps)(withRouter(Nav));
