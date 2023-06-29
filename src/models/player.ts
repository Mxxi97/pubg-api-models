class PlayerData {
  data: Player[];

  links: {
    self: string;
  };

  meta: {};

  constructor(data: Player[], links: { self: string }, meta: {}) {
    this.data = data;
    this.links = links;
    this.meta = meta;
  }
}

class Player {
  type: string;
  id: string;
  attributes: PlayerAttributes;
  relationships: {
    assets: {
      data: any[];
    };
    matches: {
      data: Match[];
    };
  };
  links: {
    self: string;
    schema: string;
  };

  constructor(
    type: string,
    id: string,
    attributes: PlayerAttributes,
    relationships: { assets: { data: any[] }; matches: { data: Match[] } },
    links: { self: string; schema: string },
  ) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.relationships = relationships;
    this.links = links;
  }
}

class PlayerAttributes {
  name: string;
  stats: any;
  titleId: string;
  shardId: string;
  patchVersion: string;
  banType: string;
  clanId: string;

  constructor(
    name: string,
    stats: any,
    titleId: string,
    shardId: string,
    patchVersion: string,
    banType: string,
    clanId: string,
  ) {
    this.name = name;
    this.stats = stats;
    this.titleId = titleId;
    this.shardId = shardId;
    this.patchVersion = patchVersion;
    this.banType = banType;
    this.clanId = clanId;
  }
}

class Match {
  type: string;
  id: string;

  constructor(type: string, id: string) {
    this.type = type;
    this.id = id;
  }
}

export { PlayerData, Player, PlayerAttributes, Match };
