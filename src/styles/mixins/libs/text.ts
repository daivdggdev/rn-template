export const text_primary = (size = '$font_size_lg', weight = 'bold') => ({
  fontSize: size,
  fontWeight: weight,
  color: '$color_text_title'
});

export const text_minor = (size = '$font_size_sm') => ({
  fontSize: size,
  fontWeight: '500',
  color: '$color_text_paragraph'
});

export const text_weak = (size = '$font_size_sm') => ({
  fontSize: size,
  fontWeight: '500',
  color: '$color_text_weak'
});
