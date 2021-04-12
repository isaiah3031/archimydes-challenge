const compareID = (storyA, storyB) => {
  if (storyA.id > storyB.id) return 1;
  if (storyA.id < storyB.id) return -1
  return 0
}

const compareComplexity = (storyA, storyB) => {
  if (complexityToInt(storyA) > complexityToInt(storyB)) return 1;
  if (complexityToInt(storyA) < complexityToInt(storyB)) return -1
  return 0
}

const complexityToInt = (story) => {
  switch (story.complexity) {
    case 'mid': return 1;
    case 'high': return 2;
    default: return 0
  }
}

export const sortByID = (stories) => stories.sort(compareID)

export const sortByComplexity = (stories) => stories.sort(compareComplexity)