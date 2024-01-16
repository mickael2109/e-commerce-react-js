import { connect } from "react-redux";
import { saveCart } from '../../lib/actions'
import App from "../../App";

export const AppContainer = connect(
    function mapStateToProps(state){
        return { items: state.items }
    },
    function mapDispatchToProps(dispatch){
        return{
            saveLocalStorage: items => dispatch(saveCart(items))
            // onUpdateCart : (item, quantity) => dispatch(updateCart(item, quantity)),
        }
    }
)(App)   