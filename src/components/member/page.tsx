import * as React from 'react';
import { MemberEntity } from '../../model';
import { MemberForm } from './memberForm';

interface Props {
  member: MemberEntity;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export class  MemberPage extends React.Component<Props>  {
 constructor(props: Props){
super(props)
 }
 
  render() {
    return (
      <MemberForm
        member={this.props.member}
        onChange={this.props.onChange}
        onSave={this.props.onSave}
      />
    );
  }
  
}
