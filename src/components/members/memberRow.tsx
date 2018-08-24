import * as React from 'react';
import { MemberEntity } from '../../model';

interface Props {
  member: MemberEntity;
}


export class  MemberRow extends React.Component<Props>  {
    constructor(props:Props){
        super(props);
    }
    public render(){
  return (
    <tr>
      <td>
        <img src={this.props.member.avatar_url} className="avatar" />
      </td>
      <td>
        <span>{this.props.member.id}</span>
      </td>
      <td>
        <span>{this.props.member.login}</span>
      </td>
    </tr>
  );
}
}