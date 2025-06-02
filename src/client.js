import {createClient} from "@sanity/client";

const sanityClient = createClient({
  projectId: "98w417at",
  dataset: "production",
});

export default sanityClient