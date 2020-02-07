import * as json from "../data/quiz.json";

export const home = "/";
export const linkQuizDev = "/quiz-dev/";
export const linkQuizAbstract = "/quiz-abstract/";

export const chooseQuiz = quizTitle => {
  if (quizTitle === `Abstract Quiz`) return linkQuizAbstract;
  return linkQuizDev;
};

export const getData = json => {
  let data = JSON.stringify(json);
  let object = JSON.parse(data);
  return object;
};

export const loadingData = () => {
  let data = [];
  let object = getData(json);
  data.push(object);
  let newData = data;
  return newData;
};
