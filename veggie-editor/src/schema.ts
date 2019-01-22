export default {
  $id: "#fruitsOrVeggies",
  $schema: "http://json-schema.org/draft-07/schema#",
  description: "A representation of a person, company, organization, or place",
  type: "object",
  properties: {
    fruits: {
      type: "array",
      items: { type: "string" }
    },
    vegetables: {
      type: "array",
      items: { $ref: "#/definitions/veggie" }
    }
  },
  definitions: {
    veggie: {
      $id: "#veggie",
      type: "object",
      required: [ "veggieName", "veggieLike" ],
      properties: {
        veggieName: {
          type: "string",
          description: "The name of the vegetable."
        },
        veggieLike: {
          type: "boolean",
          description: "Do I like this vegetable?"
        }
      }
    }
  }
}