class AssetObject {
  description?: string;
  type: string;
  id: string;
  attributes: AssetAttributes;

  constructor(
    description: string | undefined,
    type: string,
    id: string,
    attributes: AssetAttributes,
  ) {
    this.description = description;
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }
}

class AssetAttributes {
  URL: string;
  createdAt: string;
  description: string;
  name: string;

  constructor(
    URL: string,
    createdAt: string,
    description: string,
    name: string,
  ) {
    this.URL = URL;
    this.createdAt = createdAt;
    this.description = description;
    this.name = name;
  }
}

export { AssetObject, AssetAttributes };
