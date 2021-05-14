import * as R from 'ramda'

export const groupFiles = (files) => {
  const g = R.groupBy((f) => (f.accepted ? 'accepted' : 'rejected'))(files)
  // const { accepted, rejected } = g
  // console.group('groupFiles')
  // // _l('g', g)
  // _l(`accepted (${R.type(accepted)})`, accepted)
  // _l(`accepted[0] (${R.type(accepted)})`, accepted[0])
  // _l(`accepted[0].length (${R.type(accepted)})`, accepted[0].length)
  // _l(`accepted[1] (${R.type(accepted)})`, accepted[1])
  // _l(`rejected (${R.type(rejected)})`, rejected)

  // console.groupEnd()

  return {
    accepted: R.has('accepted')(g) ? g.accepted : [],
    rejected: R.has('rejected')(g) ? g.rejected : []
  }
}
