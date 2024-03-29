/* tslint disabled */
import React, { ReactNode } from 'react';
import { create } from 'dva-core';
import { Provider, connect } from 'react-redux';
import createLoading from 'dva-loading';
import createDvaImmer from 'dva-immer';
import { DvaModel } from '../types/dva';

export { connect };

let app: any = null;
export default function (options: any) {
  if (app) {
    return;
  }

  app = create(options);

  // Plugins
  app.use(createDvaImmer());
  app.use({
    ...createLoading({
      effects: true
    })
  });

  // HMR workaround
  if (!global.registered) {
    options.models.forEach((model: DvaModel) => app.model(model));
  }
  global.registered = true;

  app.start();
  const store = app._store;

  app.start = (container: ReactNode) => () => <Provider store={store}>{container}</Provider>;
  app.getStore = () => store;

  return app;
}

export function getDva() {
  return app;
}
