//can we delete this file?

import React from 'react';

const ExampleComponent = props =>
  <div>
    <button onClick={props.syncAction}>SyncAction</button>
    <br/>
    <h1 style={{display: 'inline', float: 'left'}}>{JSON.stringify(props.syncData)}</h1>
  </div>


export default ExampleComponent;