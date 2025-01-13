declare module 'base-58' {
    const encode: (input: Uint8Array | Buffer) => string;
    const decode: (input: string) => Uint8Array;
    export { encode, decode };
  }
  