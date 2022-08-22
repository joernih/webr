export interface Module extends EmscriptenModule {
  /* Add mkdirTree to FS namespace, missing from @types/emscripten at the
   * time of writing.
   */
  FS: typeof FS & {
    mkdirTree(path: string): void;
  };
  ENV: { [key: string]: string };
  monitorRunDependencies: (n: number) => void;
  noImageDecoding: boolean;
  noAudioDecoding: boolean;
  setPrompt: (prompt: string) => void;
  canvasExec: (op: string) => void;
  downloadFileContent: (
    URL: string,
    headers: Array<string>
  ) => {
    status: number;
    response: string | ArrayBuffer;
  };
  _runRCode: (code: number, length: number) => Promise<string>;
  allocate(slab: number[] | ArrayBufferView | number, allocator: number): number;
  intArrayFromString(stringy: string, dontAddNull?: boolean, length?: number): number[];
  // TODO: Namespace all webR properties
  webr: {
    readConsole: () => number;
    resolveInit: () => void;
  };
}