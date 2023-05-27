export type dummyApiCursor = 0 | 1 | 2 | 3;
export type Person = { name: string; age: number; job: string };

type DummyData = {
  [key in dummyApiCursor]: Person[];
};

export const LAST_PAGE = 3;

/**
 * ダミーのAPIレスポンスデータ
 */
export const dummyData: DummyData = {
  0: [
    { name: "John", age: 25, job: "Engineer" },
    { name: "Emily", age: 32, job: "Teacher" },
    { name: "Michael", age: 40, job: "Manager" },
    { name: "Sarah", age: 29, job: "Doctor" },
    { name: "David", age: 35, job: "Lawyer" },
  ],
  1: [
    { name: "Emma", age: 27, job: "Designer" },
    { name: "Christopher", age: 38, job: "Programmer" },
    { name: "Olivia", age: 31, job: "Nurse" },
    { name: "Daniel", age: 33, job: "Accountant" },
    { name: "Sophia", age: 26, job: "Writer" },
  ],
  2: [
    { name: "Amy", age: 28, job: "Architect" },
    { name: "Robert", age: 36, job: "Salesperson" },
    { name: "Lily", age: 30, job: "Marketing Manager" },
    { name: "William", age: 42, job: "Consultant" },
    { name: "Grace", age: 24, job: "Researcher" },
  ],
  3: [
    { name: "Andrew", age: 37, job: "Financial Analyst" },
    { name: "Ava", age: 29, job: "Graphic Designer" },
    { name: "Ethan", age: 31, job: "Product Manager" },
    { name: "Chloe", age: 26, job: "Event Planner" },
    { name: "James", age: 34, job: "Journalist" },
  ],
};
