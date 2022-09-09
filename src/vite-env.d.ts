/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APOLLO_CLIENT_URI: string;
  readonly VITE_APP_REACT_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
