// tests for logic: create different set ups and ensure correct response is returned e.g. practice nurse, pass in empty object, or a string etc.
// test that all conditions pass, not just auto pass because one matches.
import * as shifts from "../tests/shifts.json";
import { meetsCriteriaForShift } from "../components/items";
import moment from "moment";

moment().format();

const currentDate = moment("2018-06-19T16:50:00+00:00");
const notStaff = {};

const user1 = {
  id: "1234",
  firstName: "John",
  lastName: "Doe",
  staffType: "gp",
  staffTypeId: "1"
};

const user2 = {
  id: "1235",
  firstName: "Jane",
  lastName: "Doe",
  staffType: "Practice Nurse",
  staffTypeId: "2"
};

describe("Shifts", () => {
  it("returns one shift where 'staffType' === 'gp'", () => {
    let result = shifts.data.filter(item =>
      meetsCriteriaForShift(item, currentDate, user1)
    );
    expect(result).toHaveLength(6);
  });

  it("returns one shift where 'staffType' === 'practice nurse'", () => {
    let result = shifts.data.filter(item =>
      meetsCriteriaForShift(item, currentDate, user2)
    );
    expect(result).toHaveLength(1);
  });

  it("returns zero shifts where 'staffType' === 'bla'", () => {
    let result = shifts.data.filter(item =>
      meetsCriteriaForShift(item, currentDate, "bla")
    );
    expect(result).toHaveLength(0);
  });

  it("returns zero shifts where 'staffType' === '{ }'", () => {
    let result = shifts.data.filter(item =>
      meetsCriteriaForShift(item, currentDate, notStaff)
    );
    expect(result).toHaveLength(0);
  });
});
