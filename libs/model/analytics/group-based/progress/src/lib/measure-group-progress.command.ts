/**
 * Command to measure progress of a group of participants.
 */
export interface MeasureGroupProgressCommand 
{
  /** Organisation of the participant to measure. */
  orgId: string;

  /** 
   * If not set, view all participants of the organisation.
   * @optional If set view only participants that are part of the stipulated group 
   *   i.e. they have a label which matches that identifier. 
   */
  participantGroupIdentifier?: string;

  /** Collection of unix timestamps at which time to measure progress. */
  interval: number[];

  /** @optional - Group stories by a certain label key */
  // TODO: @Reagan - Labels in the future need to be key-value pair? Now we put the index of key to look at which is buggy at best.
  storyGroupIdentifier?: boolean;
}
