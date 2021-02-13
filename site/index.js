import("./node_modules/out-sending-wasm/out-sending.js").then((js) => {
    js.greet("WebAssembly");
});