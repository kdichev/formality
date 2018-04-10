import * as React from "react";

import { Children, cloneElement } from "react";
import { withStateHandlers } from "recompose";

// map inputs 'name' props to state
const mapState = ({ children }) =>
  children.reduce((obj, { props }) => {
    obj[props.keyName] = {
      ...props,
      value: "",
      error: false,
      required: props.required ? true : false
    };
    return obj;
  }, {});

const mapHandlers = {
  onChange: props => ({ target: { name, value } }) => ({
    ...props,
    [name]: {
      ...props[name],
      value
    }
  })
};

export const Input = props => {
  return [
    <div>{props.value}</div>,
    <div>{props.keyName}</div>,
    <input
      type="text"
      value={props.value}
      placeholder="text field"
      name={props.keyName}
      onChange={props.onChange}
    />
  ];
};

const Form = ({ children, onChange, onSubmit, ...rest }) => (
  <form
    onSubmit={e => {
      console.log(rest);
      e.preventDefault();
      //onSubmit(rest);
    }}
  >
    {Children.map(children, child =>
      cloneElement(child, {
        ...rest[child.props.keyName],
        onChange
      })
    )}
    <button type="submit">Submit</button>
  </form>
);

export default withStateHandlers(mapState, mapHandlers)(Form);
