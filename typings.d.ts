declare module '*.css';
declare module '*.png';
declare module '*.less' {
  const content: any;
  export default content;
}

declare var API_PREFIX: string;

declare module 'react-native-extra-dimensions-android';

declare namespace NodeJS {
  interface Global {
    registered: boolean;
  }
}
