import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function push(name, params) {
  navigationRef.current?.push(name, params);
}
export function goBack() {
  navigationRef.current?.goBack();
}