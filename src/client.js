import {createClient} from "@sanity/client";

const sanityClient = createClient({
  projectId: "4sevlcl1",
  dataset: "production",
});

export default sanityClient