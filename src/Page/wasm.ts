export const lib: any = {};

WebAssembly.instantiateStreaming(fetch('http://localhost:8080/release.wasm')).then((wasmModule) => {
  console.log('initial result: ', wasmModule);
  lib.exFunction = wasmModule?.instance?.exports;
});
