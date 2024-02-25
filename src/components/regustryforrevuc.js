'use client';
 
import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';
 //some of this doesnt make sense to me tbh
export default function StyledJsxRegistry({ chiln }) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());
 
  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });
 
  return (
    <StyleRegistry registry={jsxStyleRegistry}>
      {chiln}
    </StyleRegistry>
  );
};
