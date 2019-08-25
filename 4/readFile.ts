// Node don't have type definitions
import { readFileSync } from 'fs';

const readFile = (filename: string): string => readFileSync('./myFile.txt', 'utf8');

const fileContent: string = readFile('./myFile.txt');

console.log(fileContent);