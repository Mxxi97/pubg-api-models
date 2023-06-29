class RosterObject {
  description?: string;
  type: string;
  id: string;
  attributes: RosterAttributes;
  relationships: {
    participants: {
      description: string;
      data: Participant[];
    };
    team: {
      description: string;
    };
  };

  constructor(
    description: string | undefined,
    type: string,
    id: string,
    attributes: RosterAttributes,
    relationships: {
      participants: { description: string; data: Participant[] };
      team: { description: string };
    },
  ) {
    this.description = description;
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.relationships = relationships;
  }
}

class RosterAttributes {
  shardId: string;
  stats: {
    rank: number;
    teamId: number;
  };
  won: string; // @TODO: boolean

  constructor(
    shardId: string,
    stats: { rank: number; teamId: number },
    won: string,
  ) {
    this.shardId = shardId;
    this.stats = stats;
    this.won = won;
  }
}

class Participant {
  type: string;
  id: string;

  constructor(type: string, id: string) {
    this.type = type;
    this.id = id;
  }
}

export { RosterObject, RosterAttributes, Participant };
