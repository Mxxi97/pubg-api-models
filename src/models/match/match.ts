import { MatchType, GameMode, MapName, SeasonState } from './match.enum';
import { Links } from '../util/links';
import { Relationships } from './relationships';
import { ParticipantObject } from './participant';
import { RosterObject } from './roster';
import { AssetObject } from './assets';

class MatchData {
  data: Match;
  included: (ParticipantObject | RosterObject | AssetObject)[];
  links: Links;
  meta: {};
  constructor(
    data: Match,
    included: (ParticipantObject | RosterObject | AssetObject)[],
    links: Links,
    meta: {},
  ) {
    this.data = data;
    this.included = included;
    this.links = links;
    this.meta = meta;
  }
}

class Match {
  type: string;
  id: string;
  attributes: MatchAttributes;
  relationships: Relationships;
  links: Links;

  constructor(
    type: string,
    id: string,
    attributes: MatchAttributes,
    relationships: Relationships,
    links: Links,
  ) {
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.relationships = relationships;
    this.links = links;
  }
}

class MatchAttributes {
  createdAt: string; // @TODO: Date
  duration: number;
  matchType: MatchType;
  gameMode: GameMode;
  mapName: MapName;
  isCustomMatch: boolean;
  patchVersion: string;
  seasonState: SeasonState;
  shardId: string;
  stats: {};
  tags: {};
  titleId: string;

  constructor(
    createdAt: string, // @TODO: Date
    duration: number,
    matchType: MatchType,
    gameMode: GameMode,
    mapName: MapName,
    isCustomMatch: boolean,
    patchVersion: string,
    seasonState: SeasonState,
    shardId: string,
    stats: {},
    tags: {},
    titleId: string,
  ) {
    this.createdAt = createdAt;
    this.duration = duration;
    this.matchType = matchType;
    this.gameMode = gameMode;
    this.mapName = mapName;
    this.isCustomMatch = isCustomMatch;
    this.patchVersion = patchVersion;
    this.seasonState = seasonState;
    this.shardId = shardId;
    this.stats = stats;
    this.tags = tags;
    this.titleId = titleId;
  }
}

export { MatchData, Match, MatchAttributes };
