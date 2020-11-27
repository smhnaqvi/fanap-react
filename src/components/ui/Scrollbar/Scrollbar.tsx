import React, { PropsWithChildren } from "react";
import { Scrollbars, ScrollbarProps } from "react-custom-scrollbars";

const Scrollbar = (props: PropsWithChildren<ScrollbarProps>) => {
  const { children, ...rest } = props;

  return (
    <Scrollbars
      hideTracksWhenNotNeeded
      {...rest}
      renderView={(_props: any) => (
        <div
          {..._props}
          style={{
            ..._props.style,
            marginLeft: _props.style.marginRight,
            marginRight: 0
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
