export interface Student {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  nationality: string,
  degree?: string,
  gender: "Male"|"Female",
  homeAddress: string,
  status: "Single"|"Married",
  elementarySchool: string,
  highSchool: string,
  collegeSchool: string
}

