import { chronosMock } from "../../../mocks/chronosMock";
import { chronosReducer, loadHabilitiesActionCreator } from "./chronosSlice";
import { ChronosStateStructure } from "./types";

describe("Given a loadHabilities minireducer", () => {
  describe("When it receives a list of 'Simposns childs'", () => {
    test("Then it should return a list with 'Bart Simpson', 'Lisa Simpson' and 'Maggie Simpson' items", () => {
      const mockData = chronosMock;
      const initialState: ChronosStateStructure = {
        habilities: mockData,
      };

      const newChronosState = chronosReducer(
        initialState,
        loadHabilitiesActionCreator(mockData),
      );

      expect(newChronosState.habilities).toStrictEqual(mockData);
    });
  });
});
