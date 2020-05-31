const emailRE = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const getErrorValidation = (code: number) => {
  switch (code) {
    case 0:
      return "Все в порядке";
    case 1:
      return "Это поле должно быть заполнено";
    case 2:
      return "введите корректный e-mail";
    default:
      return "Неверный код ошибки";
  }
};

export const isNotEmpty = (x: string) => (!!x ? 0 : 1);
export const charIsNumber = (x: string) => /[0-9]/.test(x);
export const validEmail = (x: string) => {
  return emailRE.test(x.toLowerCase()) ? 0 : 2;
};
