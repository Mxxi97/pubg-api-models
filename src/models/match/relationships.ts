class Relationships {
  description?: string;
  assets: {
    data: Asset[];
  };
  rosters: {
    data: Roster[];
  };
  rounds: {
    description: string;
  };
  spectators: {
    description: string;
  };

  constructor(
    description: string | undefined,
    assets: { data: Asset[] },
    rosters: { data: Roster[] },
    rounds: { description: string },
    spectators: { description: string },
  ) {
    this.description = description;
    this.assets = assets;
    this.rosters = rosters;
    this.rounds = rounds;
    this.spectators = spectators;
  }
}

class Asset {
  type: string;
  id: string;

  constructor(type: string, id: string) {
    this.type = type;
    this.id = id;
  }
}

class Roster {
  type: string;
  id: string;

  constructor(type: string, id: string) {
    this.type = type;
    this.id = id;
  }
}

export { Relationships, Asset, Roster };
