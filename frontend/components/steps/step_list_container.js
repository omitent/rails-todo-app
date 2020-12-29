import { connect } from 'react-redux';
import { receiveStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';
import StepList from './step_list';

const mapDispatchToProps = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step))
});

// the whole state and a todo_id in a step
const mapStateToProps = (state, { todo_id }) => ({
    steps: stepsByTodoId(state, todo_id),
    todo_id
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);