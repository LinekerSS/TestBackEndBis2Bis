import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

interface CustomRequest extends Request {
  validated: any; // Replace 'any' with the actual type of 'validated'
}

const registerUNiversity = async (req: CustomRequest, res: Response) => {
  let university = req.validated;
  let response: any;
  let statusCode: number;
  university.country = university.country.toLowerCase();

  const getAll = await new UniversityRepository().getAll();

  for (let cont = 0; cont < getAll.length; cont++) {
    if (
      getAll[cont].name === university.name &&
      getAll[cont].country === university.country &&
      getAll[cont].stateProvince === university.stateProvince
    ) {
      return res.status(400).json({ smg: "this university in this database" });
    }
  }

  if (
    university.country === "argentina" &&
    university.alpha_two_code === "AR"
  ) {
    response = await new UniversityRepository().saveArgentina(university);
    statusCode = 201;
  } else if (
    university.country === "brasil" &&
    university.alpha_two_code === "BR"
  ) {
    response = await new UniversityRepository().saveInBrasil(university);
    statusCode = 201;
  } else if (
    university.country === "chile" &&
    university.alpha_two_code === "CL"
  ) {
    response = await new UniversityRepository().saveInchile(university);
    statusCode = 201;
  } else if (
    university.country === "colombia" &&
    university.alpha_two_code === "CO"
  ) {
    response = await new UniversityRepository().saveInColombia(university);
    statusCode = 201;
  } else if (
    university.country === "paraguai" &&
    university.alpha_two_code === "PY"
  ) {
    response = await new UniversityRepository().saveInParaguai(university);
    statusCode = 201;
  } else if (
    university.country === "peru" &&
    university.alpha_two_code === "PE"
  ) {
    response = await new UniversityRepository().saveInPeru(university);
    statusCode = 201;
  } else if (
    university.country === "suriname" &&
    university.alpha_two_code === "SR"
  ) {
    response = await new UniversityRepository().saveInSuriname(university);
    statusCode = 201;
  } else if (
    university.country === "uruguai" &&
    university.alpha_two_code === "UY"
  ) {
    response = await new UniversityRepository().saveInUruguay(university);
    statusCode = 201;
  } else {
    response = "countr or alpha_two_code invalid";
    statusCode = 400;
  }
  return res.status(statusCode).json({ msg: response });
};

export default registerUNiversity;
