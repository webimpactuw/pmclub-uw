import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { visualOptions } from "sanity-plugin-visual-options";

export default defineConfig({
  name: 'default',
  title: 'PM Club Website',

  projectId: '98w417at',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), visualOptions(),],

  schema: {
    types: schemaTypes,
  },
})
