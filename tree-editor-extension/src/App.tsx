import { defaultProps } from 'recompose';
import { combineReducers, createStore, Store } from 'redux';
import { materialFields, materialRenderers } from '@jsonforms/material-renderers';
import { Property } from '@jsonforms/material-tree-renderer';
import * as _ from 'lodash';
import {
  Actions,
  jsonformsReducer,
  RankedTester
} from '@jsonforms/core';

import { calculateLabel, TreeEditorApp } from 'theia-tree-editor';

import uiMetaSchema from './schema';

import { labels, modelMapping } from './config';


const imageGetter = (schemaId: string) => 'icon-test';
// !_.isEmpty(imageProvider) ? `icon ${imageProvider[schemaId]}` : '';

export const initStore = async() => {
  const uischema = {
    'type': 'TreeWithDetail',
    'scope': '#'
  };
  const renderers: { tester: RankedTester, renderer: any}[] = materialRenderers;
  const fields: { tester: RankedTester, field: any}[] = materialFields;
  const jsonforms: any = {
    jsonforms: {
      renderers,
      fields,
    }
  };

  const store: Store<any> = createStore(
    combineReducers({
        jsonforms: jsonformsReducer(

        )
      }
    ),
    { ...jsonforms }
  );

  store.dispatch(Actions.init({}, uiMetaSchema, uischema));

  return store;
};

export const filterPredicate = (data: Object) => {
  return (property: Property): boolean => {
    if (!_.isEmpty(modelMapping) &&
      !_.isEmpty(modelMapping.mapping)) {
      if (data[modelMapping.attribute]) {
        return property.schema.$id === modelMapping.mapping[data[modelMapping.attribute]];
      }
      return true;
    }

    return false;
  };
};

export default defaultProps(
  {
    'filterPredicate': filterPredicate,
    'labelProvider': calculateLabel(labels),
    'imageProvider': imageGetter
  }
)(TreeEditorApp);