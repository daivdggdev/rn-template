export const flex_end = (direction = 'column') => ({
  justifyContent: 'flex-end',
  flexDirection: direction
});

export const flex_around = (direction = 'column') => ({
  justifyContent: 'space-around',
  flexDirection: direction
});

export const flex_between = (direction = 'column') => ({
  justifyContent: 'space-between',
  flexDirection: direction
});

export const flex_center = (direction = 'row') => ({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: direction
});

export const flex_col_center = (direction = 'column') => ({
  alignItems: 'center',
  flexDirection: direction
});

export const flex_start = (direction = 'column') => ({
  justifyContent: 'flex-start',
  flexDirection: direction
});
