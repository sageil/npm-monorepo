/**
 * Docs for `service index` module
 * @packageDocumentation
 */
import { doSomething } from '@packages/common';
import type { Request, Response } from 'express';
import { app } from './server';
doSomething();

const PORT = process.env.PORT ?? 5001;
app.get('/', (_: Request, res: Response) => {
  res.send('Built with Typescript, NPM, and Esbuild.');
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/`);
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
