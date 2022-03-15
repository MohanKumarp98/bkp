import React from 'react';

function DataCount({text,count}) {
console.log(`rendering ${text} Data count`);
  return <div>
{text}-{count}
  </div>;
}

export default React.memo(DataCount);
