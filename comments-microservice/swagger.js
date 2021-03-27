export default {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Memories API",
      version: "1.0.0",
      description: "A simple site to save lovely memories",
    },
    servers: [
      {
        url: "http://localhost:5000",
        // url: "https://insta-memories.herokuapp.com/",
      },
    ],
    components: {
      securitySchemes: {
        Bearer: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
        // security: { bearerAuth: [] },
      },
      schemas: {
        CreatePost: {
          type: "object",
          properties: {
            title: {
              type: "string",
              required: true,
            },
            message: {
              type: "string",
              required: true,
            },
            tags: {
              type: "string",
              required: true,
            },
            selectedFile: {
              type: "string",
            },
            creator: {
              type: "string",
            },
            likes: {
              type: "object",
            },
            createdAt: {
              type: "object",
            },
          },
          xml: {
            name: "CreatePost",
          },
        },
        EditPost: {
          type: "object",
          properties: {
            title: {
              type: "string",
            },
            message: {
              type: "string",
            },
            tags: {
              type: "string",
            },
            selectedFile: {
              type: "string",
            },
          },
          xml: {
            name: "EditPost",
          },
        },
        // LikePost: {
        //   type: "object",
        //   properties: {
        //     id: {
        //       type: "string",
        //     },
        //     post: {
        //       type: "string",
        //     },
        //   },
        //   xml: {
        //     name: "LikePost",
        //   },
        // },
      },
    },
    paths: {
      "/api/posts": {
        get: {
          tags: ["Posts"],
          summary: "Fetch all posts",
          description: "This fetches all the post from the database",
          operationId: "fetchPost",
          responses: {
            200: {
              description: "successful operation",
            },
            500: {
              description: "Internal server error",
            },
          },
          requestBody: {
            description: "Fetches posts",
          },
        },
        post: {
          security: [
            {
              Bearer: [],
            },
          ],
          tags: ["Posts"],
          summary: "Create post",
          description:
            "Provide post title, post message, tags and add image(optional). After successful post, the response will contain",
          operationId: "createPost",
          responses: {
            200: {
              description: "successful operation",
            },
            400: {
              description: "Invalid operation",
            },
            500: {
              description: "Could not register user",
            },
          },
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreatePost",
                },
              },
            },
            description: "Register user schema",
            required: true,
          },
        },
      },
      "/api/posts/{id}": {
        patch: {
          security: [
            {
              Bearer: [],
            },
          ],
          tags: ["Posts"],
          summary: "Update post",
          description: "Users can edit their old posts",
          operationId: "editPost",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of post that needs update",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "successful operation",
            },
            400: {
              description: "Invalid operation",
            },
            500: {
              description: "Could not register user",
            },
          },
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/EditPost",
                },
              },
            },
            description: "Edit post",
            required: true,
          },
        },
        delete: {
          security: [
            {
              Bearer: [],
            },
          ],
          tags: ["Posts"],
          summary: "Delete post",
          description: "Users can delete their old posts",
          operationId: "deletePost",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of post to be deleted",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "successful operation",
            },
            400: {
              description: "Invalid operation",
            },
            500: {
              description: "Could not register user",
            },
          },
          requestBody: {
            description: "Delete post",
          },
        },
      },
      "/api/posts/{id}/likePost": {
        patch: {
          security: [
            {
              Bearer: [],
            },
          ],
          tags: ["Posts"],
          summary: "Like post",
          description: "Users can like post",
          operationId: "likePost",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of post to like",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {
              description: "successful operation",
            },
            400: {
              description: "Invalid operation",
            },
            500: {
              description: "Could not register user",
            },
          },
          requestBody: {
            // content: {
            //   "application/json": {
            //     schema: {
            //       $ref: "#/components/schemas/LikePost",
            //     },
            //   },
            // },
            description: "Like post",
            // required: true,
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};
