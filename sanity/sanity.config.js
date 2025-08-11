import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { visualOptions } from "sanity-plugin-visual-options";
import {orderableDocumentListDeskItem, orderRankField} from '@sanity/orderable-document-list'
import eventInfo from './schemas/eventInfo';

export default defineConfig({
  name: 'default',
  title: 'PM Club Website',

  projectId: '98w417at',
  dataset: 'production',
  
  plugins: 
    [
      structureTool({
        structure: (S, context) => {
          return S.list()
            .title('Content')
            .items([
              ...S.documentTypeListItems().reverse(),
              // Minimum required configuration
              orderableDocumentListDeskItem({type: 'eventInfo', S, context}),
            ])
          },
      }), 
    visionTool(), visualOptions(),],

  schema: {
    types: schemaTypes,
  },

})