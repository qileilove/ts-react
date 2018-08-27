import * as React from 'react';

interface Props {
  label: string;
  className: string;
  onClick: () => void;
}

export class Button extends React.Component<Props>  {
constructor(props: Props){
super(props)
}
public render(){
  return (
    <button type="button"
      className={this.props.className}
      onClick={this.props.onClick}
    >
      {this.props.label}
    </button>
  );
};
}