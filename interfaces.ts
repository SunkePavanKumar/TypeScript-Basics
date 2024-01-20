interface patientDetails {
  name: string;
  age: number;
  height: number;
  weight: number;
  sex: string;
}

// If the user need to add the additional features( Note: in the real scenario it might be in the other file)

interface patientDetails {
  bp: string;
}

// Inherit the properties of the patient
interface nomineeDetails extends patientDetails {
  nomineeName: string;
  mobile: number | string;
}

let patient: patientDetails = {
  name: "pavan kumar sunke",
  age: 22,
  height: 5.67,
  weight: 85,
  sex: "male",
  bp: "176/180",
};

let nominee: nomineeDetails = {
  nomineeName: "Test Pavan",
  mobile: "93475*****",
  ...patient,
};
