import * as React from 'react';

export class MemberHeader extends React.Component {
    public render(){
  return (
    <tr>
      <th>Avatar</th>
      <th>Id</th>
      <th>Name</th>
    </tr>
  );
}
}