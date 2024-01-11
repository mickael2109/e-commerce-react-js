import { connect } from "react-redux";
import { updateCart } from '../../lib/actions'
import App from "../../App";

export const AppContainer = connect(
    function mapStateToProps(state){
        return { items: state.items }
    },
    function mapDispatchToProps(dispatch){
        return{
            onUpdateCart : (item, quantity) => dispatch(updateCart(item, quantity)),
        }
    }
)(App)