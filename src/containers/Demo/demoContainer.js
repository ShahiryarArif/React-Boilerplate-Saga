import Counter from "modules/Demo/components/Counter";
import {
  incrementCounter,
  decrementCounter,
} from "redux/slice/counter/counter-slice";
import { counterActions } from "../../redux/saga-action/counter/counter-actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    total: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(incrementCounter());
  },
  apiTestcall: (num) => {
    dispatch({
      type: counterActions.APITEST,
      payload: num,
    });
  },
  decrement: () => {
    dispatch(decrementCounter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
