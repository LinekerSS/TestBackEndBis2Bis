import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const infoWeb_pages = req.body.web_pages;
  const infoName = req.body.name;
  const infoDomains = req.body.domains;
  const getAll = await new UniversityRepository().getAll();
  let old: any;
  let toUpdate: any;
  let country: string;
  let newvier;
  for (let cont = 0; cont < getAll.length; cont++) {
    if (getAll[cont].id === id) {
      old = getAll[cont];
      toUpdate = getAll[cont];
      country = getAll[cont].country;
    }
  }

  if (infoWeb_pages) {
    toUpdate["web_pages"] = infoWeb_pages;
  }
  if (infoDomains) {
    toUpdate["domains"] = infoDomains;
  }
  if (infoName) {
    toUpdate["name"] = infoName;
  }

  if (country === "argentina") {
    const argentina = await new UniversityRepository().updateArgentina(
      old,
      toUpdate
    );
    newvier = argentina;
  } else if (country === "brasil") {
    const brasil = await new UniversityRepository().updatebrasil(old, toUpdate);
    newvier = brasil;
  } else if (country === "chile") {
    const chile = await new UniversityRepository().updateChile(old, toUpdate);
    newvier = chile;
  } else if (country === "colombia") {
    const colombia = await new UniversityRepository().updateInColombia(
      old,
      toUpdate
    );
    newvier = colombia;
  } else if (country === "paraguai") {
    const paraguai = await new UniversityRepository().updateInParaguai(
      old,
      toUpdate
    );
    newvier = paraguai;
  } else if (country === "peru") {
    const peru = await new UniversityRepository().updateInPeru(old, toUpdate);
    newvier = peru;
  } else if (country === "suriname") {
    const suriname = await new UniversityRepository().updateInSuriname(
      old,
      toUpdate
    );
    newvier = suriname;
  } else if (country === "uruguai") {
    const uruguay = await new UniversityRepository().updateInUruguay(
      old,
      toUpdate
    );
    newvier = uruguay;
  } else {
    return res.status(404).json({ err: "university is not in database" });
  }

  return res.status(200).json(newvier);
};
export default update;
