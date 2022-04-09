// sanity-client.ts
import { createClient } from 'sanity-codegen';
import { Documents } from './schema';

// This type parameter enables the client to be aware of your generated types
//                           👇👇👇
export default createClient<Documents>({
  // Note: these are useful to pull from environment variables
  // (required) your sanity project id
  projectId: 'zz0mojkk',
  // (required) your sanity dataset
  dataset: 'production',
  // (required) the fetch implementation to use
  fetch: fetch,
  //
  // (optional) if true, the client will prefer drafts over the published versions
  previewMode: true,
  // (optional) only required if your dataset is private or if you want to use preview mode
  // token: '...',
  // by default sanity-codegen caches responses in memory. this can be disabled if desired
  // disabledCache: true,
});