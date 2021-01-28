import React from 'react';
import { connect } from 'react-redux'

const TodoList = ({ value, changeVal, clickbtn, list }) => {
  return (
    <div>
      <input type="text" value={value} onChange={changeVal} />
      <button onClick={clickbtn}>提交</button>
      <ul>
        {list.map((el, index) => {
          return (
            <li key={index}>
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

const stateToProps = (state) => {
  return {
    value: state.value,
    list: state.list
  }
}

const dispatchToProps = (dispacth) => {
  return {
    changeVal(e) {
      dispacth({ type: 'changeInput', value: e.target.value })
    },
    clickbtn() {
      dispacth({ type: 'add_item' })
    }
  }
}
export default connect(stateToProps, dispatchToProps)(TodoList);