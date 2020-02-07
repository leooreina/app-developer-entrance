export const home = "/"
export const linkAbstractQuiz = "/abstract-quiz/"
export const linkDevQuiz = "/dev-quiz/"

export const getData = (json) => {
  let data = JSON.stringify(json);
  let object = JSON.parse(data);
  return object;
}

export const chooseQuiz = (quizTitle) => {
  if (quizTitle === `Abstract Quiz`)
      return linkAbstractQuiz
    return linkDevQuiz
}