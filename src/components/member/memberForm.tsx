import * as React from 'react';
import { MemberEntity } from '../../model';
import { Input, Button } from '../../common/components/form';

interface Props {
  member: MemberEntity;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export class MemberForm extends React.Component<Props> {

    constructor(props: Props){
        super(props)
    }
    public render(){
    

  return (
    <form>
      <h1>Manage member</h1>

      <Input
        name="login"
        label="Login"
        value={this.props.member.login}
        onChange={this.props.onChange}
      />

      <Input
        name="avatar_url"
        label="Avatar Url"
        value={this.props.member.avatar_url}
        onChange={this.props.onChange}
      />

      <Button
        label="Save"
        className="btn btn-default"
        onClick={this.props.onSave}
      />
    </form>
  );
};
}