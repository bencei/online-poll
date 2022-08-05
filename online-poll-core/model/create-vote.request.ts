import { PollOption } from "./poll-option";
import { Vote } from "./vote";
import { ObjectId } from "mongodb";

export interface CreateVoteRequest extends Vote {
    pollId?: ObjectId,
    options: PollOption[],
}