import path from 'path'
import { AliasOptions } from 'vite'

export const alias = { '@': path.resolve(__dirname, '../src') } as AliasOptions
