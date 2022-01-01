export const line = (num = 1) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: num === 1 ? 'nowrap' : 'wrap'
});
