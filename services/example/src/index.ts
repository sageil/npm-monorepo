/**
 * Docs for `service index` module
 * @packageDocumentation
 */
import { doSomething } from '@packages/common';
doSomething();

import type { Application, Request, Response } from 'express';
import express from 'express';
const app: Application = express();

app.get('/', (_: Request, res: Response) => {
  res.send('Built with Typescript, NPM, and Esbuild.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('Visit http://localhost:3000/');
});
const fn = () => {
  return 'hello';
};
fn();
/**
 *
 * @param incoming string
 * @returns lowercase string
 */
export function magicalLowerCase(incoming: string): string {
  return incoming.toLocaleLowerCase();
}
const s = magicalLowerCase('Hello');
console.log(s);