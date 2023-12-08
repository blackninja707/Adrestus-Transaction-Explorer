import React from "react";
import { AutoSizer, List } from "react-virtualized";

const Test = () => {
  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style} className="text-white">
      Row {index}
    </div>
  );

  return (
    <div className="h-[100px]">
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowCount={10}
            rowHeight={30}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default Test;
