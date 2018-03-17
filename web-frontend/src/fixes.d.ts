// @todo: temp fix for 'react-apollo' type definition
// @see: https://github.com/apollographql/react-apollo/issues/1286
declare module 'lodash.flowright';

// allow importing json data
declare module '*.json' {
    const value: any;
    export default value;
}
