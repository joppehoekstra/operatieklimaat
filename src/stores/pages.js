import { defineStore } from "pinia";

import { useDirectus } from "@directus/sdk";
import { graphql } from "@directus/sdk/graphql";
const client = useDirectus("http://localhost:8055").use(graphql());

export const usePagesStore = defineStore("pages", {
  state: () => ({
    pages: {},
  }),

  actions: {
    async getPage(path) {
      await client
        .query(
          `
          query {
            pages(limit: 1, filter: {
              path: {
                _eq: "${path.replaceAll('"', "")}"
              }
            }) {
              title
              path
              image {
                id
              }
              description
              form {
                title
                button_label
                questions {
                  collection
                  item {
                    ... on question_text {
                      id
                      label
                      type
                      key
                      icon
                      hint
                      width
                    }
                  }
                }
              }
              content {
                collection
                item {
                  ... on content_text {
                    title
                    text
                  }
                  ... on events {
                    id
                    title
                    description
                  }
                  ... on block_groups {
                    title
                    blocks {

                      blocks_id {
                        title
                        description
                        button_label
                        link
                      }
                    }

                  }
                  ... on event_collections {
                    title
                    events {
                      events_id {
                        title
                        description
                        date_start
                        date_end
                      }
                    }
                  }
                }
              }
              id
            }
          }
      `
        )
        .then((result) => {
          this.pages[path] = result.pages[0];

          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
