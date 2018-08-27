import * as React from "react";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (fieldName: string, value: string) => void;
  error?: string;
}

export class Input extends React.Component<Props> {
    constructor(props:Props){
        super(props);
    }
   public render(){ 
  return (
    <div className={formatWrapperClass(this.props)}>
      <label htmlFor={this.props.name}>{this.props.label}</label>
      <div className="field">
        <input type="text"
          name={this.props.name}
          className="form-control"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={onChangeInput(this.props)}
        />
      </div>
      <div className="help-block">{this.props.error}</div>
    </div>
  )
};
}
const formatWrapperClass = (props: Props) => {
  const wrapperClass = 'form-group';

  return props.error ?
    `${wrapperClass} has-error` :
    wrapperClass;
};

const onChangeInput = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value);
};
