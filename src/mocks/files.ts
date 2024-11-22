import { faker } from "@faker-js/faker";

export const mockFilename = (): string => {
  const adjective = faker.word.adjective;
  const noun = faker.word.noun;
  const id = faker.git.commitSha;
  return `${adjective()}-${noun()}-${id()}`;
};

export const mockFilenames = (n: number): string[] =>
  Array.from({ length: n }, () => mockFilename());

export const mockFile = () => {
  return {
    id: faker.git.commitSha(),
    name: mockFilename(),
  };
};

export const mockFiles = (n: number) => {
  return Array.from({ length: n }, () => mockFile());
};

// TODO: move to common?
export const genWord = faker.word.words;
export const genNumber = faker.number.int;
