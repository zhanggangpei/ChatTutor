declare global {
  type ReadableStream = typeof import('node:stream/web').ReadableStream
}
