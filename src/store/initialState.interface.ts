export interface InitialStateInterface {
  familyName: string;
  name: string;
  surname: string;
  wantedPosition: string;
  bussinessTrip: boolean;
  salary: string;
  currency: string;
  email: string;
  messengers: string;
  busyness: string;
  schedule: string;
  city: string;
  nationality: string;
  dateBirth: string;
  movingToDiffCity: string;
  gender: string;
  family: string;
  children: string;
  driversLicense: string;
  language: string;
  medicalBook: string;
  addInfo: string;
  links: string;
  telephone: string;
  telephoneCode: string;
  counterEducation: string;
  counterExperience: string;
  salaryNumber: string;
  photo: string;
  aboutMe: string;
  // -- Iterable keys
  [key: string]: any;
  // --- Education ---
  // institute(N)
  // faculty(N)
  // endingEducation(N)
  // specialty(N)
  // --- Experience ---
  // workPeriodFrom(N)
  // workPeriodTo(N)
  // organization(N)
  // positionJob(N)
  // responsibility(N)
}
