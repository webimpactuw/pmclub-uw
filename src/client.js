import {createClient} from "@sanity/client";

const sanityClient = createClient({
  projectId: "98w417at",
  dataset: "production",
  apiVersion: '2025-08-11'
});

export default sanityClient