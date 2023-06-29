class ParticipantObject {
  description?: string;
  type: string;
  id: string;
  attributes: ParticipantAttributes;

  constructor(
    description: string | undefined,
    type: string,
    id: string,
    attributes: ParticipantAttributes,
  ) {
    this.description = description;
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }
}

class ParticipantAttributes {
  actor: string;
  shardId: string;
  stats: {
    description: string;
    DBNOs: number;
    assists: number;
    boosts: number;
    damageDealt: number;
    deathType: DeathType;
    headshotKills: number;
    heals: number;
    killPlace: number;
    killStreaks: number;
    kills: number;
    longestKill: number;
    name: string;
    playerId: string;
    revives: number;
    rideDistance: number;
    roadKills: number;
    swimDistance: number;
    teamKills: number;
    timeSurvived: number;
    vehicleDestroys: number;
    walkDistance: number;
    weaponsAcquired: number;
    winPlace: number;
  };

  constructor(
    actor: string,
    shardId: string,
    stats: {
      description: string;
      DBNOs: number;
      assists: number;
      boosts: number;
      damageDealt: number;
      deathType: DeathType;
      headshotKills: number;
      heals: number;
      killPlace: number;
      killStreaks: number;
      kills: number;
      longestKill: number;
      name: string;
      playerId: string;
      revives: number;
      rideDistance: number;
      roadKills: number;
      swimDistance: number;
      teamKills: number;
      timeSurvived: number;
      vehicleDestroys: number;
      walkDistance: number;
      weaponsAcquired: number;
      winPlace: number;
    },
  ) {
    this.actor = actor;
    this.shardId = shardId;
    this.stats = stats;
  }
}

enum DeathType {
  Alive = 'alive',
  ByPlayer = 'byplayer',
  ByZone = 'byzone',
  Suicide = 'suicide',
  Logout = 'logout',
}

export { ParticipantObject, ParticipantAttributes, DeathType };
