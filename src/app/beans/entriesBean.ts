import { Match } from './matchBean';
import { User } from './userBean';

export class Entries {
    entryId: number;
    match: Match;
    user: User;
    matchRate: number;
    entryType: string;
    betTeam: string;
    betAmount: number;
    matchAmount: number;
  }
