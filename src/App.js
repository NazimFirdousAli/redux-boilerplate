import './App.css';
import { connect } from 'react-redux';
import set_data from './Store/Action';

const mapStateToProps = (state) => ({
  name:state.name,
  class:state.class
})

const mapDispatchToProps = (dispatch) => ({
  set_data: () =>dispatch(set_data())
})

function App(props) {
console.log(props)
  return (
    <div className="App">
      hello world<br/>
      <button onClick={()=>props.set_data()}>CLick me</button>
    </div>
  );
}


export default connect(mapStateToProps,mapDispatchToProps) (App);
