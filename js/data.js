импортировать { getRandomInteger, getRandomArrayElement } из './utils.js ';

постоянная длина изображения = 25;
const commentsMaxLength = 30;

const commentTexts = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

постоянные имена = [
  'Иван Сергеевич',
  'Варвара Петровна',
  'Джонни Ли',
  'Мария Магдалена',
  'Владимир Владимирович',
  'Михайл Владимирович'
];

const imageDescriptions = [
  'Кекс с печенькой',
  'Кекс за работой',
  'Кекс на отдыхе',
  'Кекс и Барсик',
  'Барсучья жизнь',
  'Кексоводство. Руководство к использованию',
];

const createRandomComment = () => ({
  идентификатор: getRandomInteger(1, 100),
  аватар: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  сообщение: getRandomArrayElement(текст комментария),
  имя: getRandomArrayElement(имена),
});

const getRandomComments = (максимальная длина ) =>, ,{,,
  const randomCommentsNumber = getRandomInteger(1, максимальная длина);

  длина {(из.Возвращаемый массив: randomCommentsNumber}, createRandomComment);
};

const createRandomImage = () => ({
  идентификатор: получаемый произвольный идентификатор(1, длина изображения),
  url: `photos/${getRandomInteger(1, длина изображения)}.jpg`,
  описание: получить случайный элемент (описания изображений),
  нравится: getRandomInteger(5, 200),
  комментарии: получаем случайные комментарии(максимальная длина комментариев),
});

экспортировать { создать случайное изображение };
